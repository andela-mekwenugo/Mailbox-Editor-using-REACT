var Editor = React.createClass({
  getDefaultProps: function() {
    return {
      placeholder: 'Enter your message here...',
      body: ""
    };
  },
  componentDidMount: function () {
    var that = this;
    $('#editor').trumbowyg({
      fullscreenable: false
    })
    .on('tbwchange', function (){
      that.props.onChange($('#editor').trumbowyg('html'));
    });

    $('#editor').trumbowyg('html', this.props.body);
  },
  componentWillReceiveProps: function (nextProps) {
  	if (nextProps.body == ""){
      $('#editor').trumbowyg('empty');
  	}
  },
  render: function () {
    return <div id="editor" placeholder={this.props.placeholder}></div>;
  }
});

var Mailbox = React.createClass({
   render: function () {
   	return(
     <div className="panel-body">
       <Editor onChange={this.handleEditorChange}
           body={this.state.emailBody} />
     </div>
    );
   },

   handleEditorChange: function (emailBody) {
     this.setState({ "emailBody": emailBody });
   },
});

var Modal = React.createClass({
    render: function () {
      return (
        <div className="modal fade" tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" ><span>&times;</span></button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              <div className="modal-body">
                {this.props.body}
              </div>
              <div className="modal-footer">
                <div className="btn-toolbar pull-right" role="toolbar">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-danger outline" data-dismiss="modal">Close</button>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      );
    }
});

var Mailbox = React.createClass({
  getInitialState: function () {
    return {
      "emailTo": "",
      "emailCC": "",
      "emailBCC": "",
      "emailSubject": "",
      "emailBody": ""
    }
  },
  render: function () {
    return (
  <div className="panel panel-default">
    <div className="panel-heading">
        <div className="row">
            <div className="col-xs-8 center">
                <div className="inbox-title">
                    <span className="glyphicon glyphicon-envelope center"></span>
                    <h2 className="center">{this.props.title}</h2>
                </div>
            </div>
            <div className="col-xs-4 center">
                <div className="inbox-avatar text-right">
                    <div className="inbox-avatar-name"><a href={this.props.link}>{this.props.username}</a></div>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-xs-12">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="email-to" className="col-sm-1 control-label">To</label>
                        <div className="col-sm-11">
                            <input type="email" className="form-control" id="email-to" value={this.state.emailTo} placeholder="Eg: mirabel@example.com" onChange={this.handleEmailToChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email-cc" className="col-sm-1 control-label">CC</label>
                        <div className="col-sm-11">
                            <input type="email" className="form-control" id="email-cc" value={this.state.emailCC} onChange={this.handleEmailCCChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email-bcc" className="col-sm-1 control-label">BCC</label>
                        <div className="col-sm-11">
                            <input type="email" className="form-control" id="email-bcc" value={this.state.emailBCC} onChange={this.handleEmailBCCChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email-subject" className="col-sm-1 control-label">Subject</label>
                        <div className="col-sm-11">
                            <input type="email" className="form-control" id="email-subject" value={this.state.emailSubject} onChange={this.handleEmailSubjectChange}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className="panel-body">
        <Editor onChange={this.handleEditorChange} />
    </div>
    <div className="panel-footer">
        <div className="btn-toolbar pull-right" role="toolbar">
            <div className="btn-group" role="group">
                <button type="button" onClick={this.handleCancelClick} className="btn btn-danger">CANCEL</button>
                <button type="button" onClick={this.handleSaveClick} className="btn btn-success">SAVE</button>
            </div>
            <div className="btn-group" role="group">
                <button type="button" onClick={this.handleSendClick} className="btn btn-primary outline">SEND</button>
            </div>
            <Modal ref="modalSend" title="Email sent!" body="Your email has been successfully sent!" />
            <Modal ref="modalSave" title="Email saved!" body="Your email has been successfully saved!" />
        </div>
        <div className="clearfix">
        </div>
    </div>
  </div>
    );
  },
  handleEditorChange: function (emailBody) {
    this.setState({ "emailBody": emailBody });
  },
  handleEmailToChange: function (e) {
    this.setState({ "emailTo": e.target.value });
  },
  handleEmailCCChange: function (e) {
    this.setState({ "emailCC": e.target.value });
  },
  handleEmailBCCChange: function (e) {
    this.setState({ "emailBCC": e.target.value });
  },
  handleEmailSubjectChange: function (e) {
    this.setState({ "emailSubject": e.target.value });
  }
});

var options = {
  username: "Mirabel Ekwenugo",
  link: "https://www.facebook.com/koso.mirabel.ekwenugo",
  title: "React Mailbox Editor By"
};

var element = React.createElement(Mailbox, options);
ReactDOM.render(element, document.querySelector('.container'));

var element = React.createElement(Mailbox, options);
ReactDOM.render(element, document.querySelector('.container'));