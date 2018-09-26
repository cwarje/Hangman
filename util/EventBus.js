var buttonP;

let EventBus = function(sender) {
  let _sender     = sender;
  let _callbacks  = [];

  function onEvent(callback) {
    _callbacks.push(callback);
  };

  function notify(args) {
    if (args) {
      buttonPressed(args);
    }
    _callbacks.forEach((callback) => {
      callback(_sender, args);
    })
  };

  function getSender() {
    return _sender;
  }

  function buttonPressed(args) {
    buttonP = args;
  }

  // Public interface
  this.onEvent  = onEvent;
  this.notify   = notify;
  this.getSender = getSender;
  this.buttonPressed = buttonPressed;

};