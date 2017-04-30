Meteor.setInterval(() => {
    //make an array with symbols
    const symbols = [];
    Stocks.find().forEach((stock) => {
        symbols.push(stock.symbol);
    });

    //get data from yahoo finance api
    const results = YahooFinance.snapshot({symbols: symbols, fields: ['s', 'b']});

    //update collection 
    results.forEach((result) => {
        let stock = Stocks.findOne({ symbol: result.symbol });
        if (result.bid) {
            let change = stock.price ? result.bid - stock.price : 0;
            Stocks.update(stock._id, { $set: { price: result.bid, change: change }});
        }
    })
}, 3000);