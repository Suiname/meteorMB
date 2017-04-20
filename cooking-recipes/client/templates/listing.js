
Meteor.subscribe('recipes');

Template.listing.helpers({
  entries: () => {
    return Recipes.find({}, {sort: {title: 1}});
  },
  isOwner () {
    if (!Meteor.userId()) {
      return false;
    }

    return Meteor.userId() == this.owner;
  }
});

Template.listing.events({
  'click .delete' (event) {
    Meteor.call('deleteRecipe', this._id);
  },
});