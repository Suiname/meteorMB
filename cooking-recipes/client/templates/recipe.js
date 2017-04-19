Template.recipe.helpers({
    recipe: () => {
        const recipeId = FlowRouter.getParam('id');
        const recipe = Recipes.findOne(recipeId);
        return recipe;
    }
})