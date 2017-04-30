import { Template } from 'meteor/templating';

Template.addStock.events({
    'submit #addStock' (event) {
        event.preventDefault();
        const data = {
            symbol: event.target.querySelector('#symbol').value
        };
        Meteor.call('addStock', data);
        event.target.reset();
    }
});