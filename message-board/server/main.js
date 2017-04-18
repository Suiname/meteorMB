import { Meteor } from 'meteor/meteor';
import { Sales } from '../api/sales.js';

 if (Meteor.isServer) {
  // This code only runs on the server
    Meteor.startup(() => {
    // code to run on server at startupconst num = Sales.find().count();
    const num = Sales.find().count();
      if (num === 0) {
        let qty, prodIndex;
        const productOptions = ['red', 'green', 'blue', 'purple', 'orange'];
        for (let index = 0; index < 400; index++) {
          qty = Math.ceil(1 + Math.random() * 20);
          prodIndex = Math.floor(Math.random() * productOptions.length);
          
          Sales.insert({
            qty,
            total: 100 * qty,
            time: new Date(),
            products: productOptions.slice(0, prodIndex),
          });
        }
      }
  });
}


