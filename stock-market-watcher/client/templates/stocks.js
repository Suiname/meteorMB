Meteor.subscribe('stocks');

Template.stocks.helpers({
    stocks: () => Stocks.find(),
});

Template.stocks.events({
    'click .delete' () {
        Meteor.call('deleteStock', this._id);
    },
});