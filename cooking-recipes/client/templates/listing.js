import Recipes from '/lib/recipes';

Template.listing.helpers({
  entries: () => {
    return Recipes.find().fetch();
  }
})