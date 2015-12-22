var Mailbox = React.createClass({
  getDefaultProps: function() {
    return {
      placeholder: 'Enter your message here...',
      body: ""
    };
  },
  componentDidMount: function () {
    $('#editor').trumbowyg({
      fullscreenable: false
    });

    $('#editor').trumbowyg('html', this.props.body);
  },
  render: function () {
    return <div id="editor" placeholder={this.props.placeholder}></div>;
  }
});

var options = {};

var element = React.createElement(Mailbox, options);
ReactDOM.render(element, document.querySelector('.container'));