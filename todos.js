if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
      var options = {
        message: "This is a native alert message woot.",
        buttonLabel: "Close"
      };

      supersonic.ui.dialog.alert("Custom title!", options).then(function() {
        supersonic.logger.log("Alert closed.");
      });

      // Haven't been able to verify that this works because steroids doesn't like Meteor! Yet?
      supersonic.ui.navigationBar.setStyle("background-color:blue;color:white").then(function() {
        supersonic.logger.log("Navigation bar style was set.");
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
