import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  //count recipes
  const num = Recipes.find().count();
  console.log(`There are ${num} entries in the database.`)
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

  Recipes.allow({
    insert: (recipeId, doc) => doc,
    update: (recipeId, doc) => doc,
  });
});