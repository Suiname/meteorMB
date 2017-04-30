import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    const num = Stocks.find().count();
    console.log(`${num} stocks in the database.`)
    if (num === 0) {
        const fixtures = [
            { symbol: 'GOOG'},
            { symbol: 'AAPL'},
            { symbol: 'ANZ.AX'},
            { symbol: 'BXB.AX'},
            { symbol: 'ASX.AX'},
            { symbol: 'IAG.AX'},
            { symbol: 'MSFT'},
            { symbol: 'AMZN'},
        ];

        fixtures.forEach((stock) => {
            Stocks.insert(stock);
        });
    }
    Meteor.publish('stocks', function () { 
        return Stocks.find();
    });
});