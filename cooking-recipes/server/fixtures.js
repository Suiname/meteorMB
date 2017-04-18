import { Meteor } from 'meteor/meteor';
import Recipes from '/lib/recipes';

Meteor.startup(() => {
  //count recipes
  
  const num = Recipes.find().count();
  console.log(Recipes.find());
  if (num === 0) {
    const fixtures = [
      {
        title: 'Chilean empanadas',
        ingredients: '1 kg flour, garlic, onion, spices, egg, meat, olives',
        instructions: 'Prepare the dough, fry onions, cook in the oven.'
      }
    ];

    fixtures.forEach((element) => {
      Recipes.insert(element);
    });

  }
});