FlowRouter.route('/', {
    action: (params, queryParams) => {
        console.log('home page');
        BlazeLayout.render('listing');
    }
})

FlowRouter.route('/newRecipe', {
    action: (params, queryParams) => {
        BlazeLayout.render('recipeForm');
    }
})

FlowRouter.route('/recipe/:id', {
    action: (params, queryParams) => {
        BlazeLayout.render('recipe');
    }
})