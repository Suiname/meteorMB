
Meteor.subscribe('recipes');

Template.listing.helpers({
  entries: () => {
    return Recipes.find({}, {sort: {title: 1}});
  },
});

Template.listing.events({
  'click .delete' (event) {
    Meteor.call('deleteRecipe', this._id);
  },
});