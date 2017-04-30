Meteor.subscribe('stocks');

Template.stocks.helpers({
    stocks: () => {
        let entries;
        if (Session.get('filter') === 'up') {
            entries = Stocks.find({ change: { $gt: 0 }});
        } else if (Session.get('filter') === 'down') {
            entries = Stocks.find({ change: { $lt: 0 }});
        } else {
            entries = Stocks.find();
        }
        return entries;
    },
    cssPriceClass () {
        let newClass = 'price-same';
        if (this.change > 0) {
            newClass = 'price-up';
        } else if (this.change < 0) {
            newClass = 'price-down';
        }
        return newClass;
    }
});

Template.stocks.events({
    'click .delete' () {
        Meteor.call('deleteStock', this._id);
    },
    'change #stock-filter' (event) {
        Session.set('filter', event.target.value);
    }
});