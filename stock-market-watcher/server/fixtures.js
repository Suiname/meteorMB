import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    const num = Stocks.find().count();
    console.log(`${num} stocks in the database.`)
    if (num === 0) {
        const fixtures = [
            {
                symbol: 'GOOG',
                price: 738.32,
                change: 1,
            },
            {
                symbol: 'AAPL',
                price: 116.77,
                change: -1,
            },
            {
                symbol: 'AMZN',
                price: 659.68,
                change: 1,
            },
            {
                symbol: 'MSFT',
                price: 53.51,
                change: -1,
            },  
        ];

        fixtures.forEach((stock) => {
            Stocks.insert(stock);
        });
    }
    Meteor.publish('stocks', function () { 
        return Stocks.find();
    });
});