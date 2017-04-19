Template.recipeForm.helpers({
    showTitle: () => {
        const title = 'New Recipe';
        return title;
    },
    recipe: () => {
        const recipe = {};
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

        Recipes.insert(data);
        FlowRouter.go('/');
    }
});