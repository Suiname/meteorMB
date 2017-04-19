import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  //count recipes
  const num = Recipes.find().count();
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
  Meteor.publish('recipes', () => {
    return Recipes.find();
  })
});