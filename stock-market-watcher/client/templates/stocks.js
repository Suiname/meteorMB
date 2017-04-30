Meteor.subscribe('stocks');

Template.stocks.helpers({
    stocks: () => Stocks.find(),
});