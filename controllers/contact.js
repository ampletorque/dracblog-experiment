Blogger.ContactController = Ember.Controller.extend({
  actions: {
    messageSent: false,
  sendMessage: function() {
    var message = prompt('type here');
    this.set('confirmationNumber', Math.round(Math.random() * 100000));
    this.set('messageSent', true);
  }


}
});
