import { Mongo } from 'meteor/mongo';
Recipes = new Mongo.Collection('recipes');

Meteor.methods({
    deleteRecipe: (id) => {
        Recipes.remove(id);
    }
})