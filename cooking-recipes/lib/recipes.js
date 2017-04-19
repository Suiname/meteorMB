import { Mongo } from 'meteor/mongo';
Recipes = new Mongo.Collection('recipes');

Meteor.methods({
    deleteRecipe: (id) => {
        const recipe = Recipes.findOne(id);
        if (Meteor.userId() != recipe.owner) {
            throw new Meteor.Error('not-authorized', 'you are not the owner');
        }
        Recipes.remove(id);
    },
    insertRecipe: (data) => {
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        data.owner = Meteor.userId();
        Recipes.insert(data);
    },
    updateRecipe: (id, data) => {
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        const recipe = Recipes.findOne(id);
        if (Meteor.userId() != recipe.owner) {
            throw new Meteor.Error('not-authorized', 'you are not the owner');
        }
        data.owner = Meteor.userId();
        Recipes.update(id, { $set: data })
    }
});