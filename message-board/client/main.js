import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Sales } from '../api/sales.js';


Template.sales.helpers({
    sales: () => {
      return Sales.find({products: { $in: ['purple'] }});
    }
  });