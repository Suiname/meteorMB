Template.recipeForm.helpers({
    showTitle: () => {
        let title = 'New Recipe';
        const recipeId = FlowRouter.getParam('id');
        const recipe = Recipes.findOne(recipeId);
        if (recipe) {
            title = recipe.title;
        }
        return title;
    },
    recipe: () => {
        const recipeId = FlowRouter.getParam('id');
        const recipe = Recipes.findOne(recipeId) || {};
        return recipe;
    }
});

Template.recipeForm.events({
    'submit #recipeForm' (event) {
        event.preventDefault();
        const data = {
            title: event.target.querySelector('#title').value,
            ingredients: event.target.querySelector('#ingredients').value,
            instructions: event.target.querySelector('#instructions').value,
        }        
        const recipeId = FlowRouter.getParam('id');
        if (recipeId) {
            Recipes.update(recipeId, { $set: data });
        } else {
            Meteor.call('insertRecipe', data);
        }
        FlowRouter.go('/');
    }
});