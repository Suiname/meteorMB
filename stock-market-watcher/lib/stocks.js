import { Mongo } from 'meteor/mongo';

Stocks = new Mongo.Collection('stocks');

Meteor.methods({
    addStock: (data) => {
        Stocks.insert(data);
    },
    deleteStock: (id) => {
        Stocks.remove(id);
    },
});

