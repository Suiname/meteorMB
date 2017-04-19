FlowRouter.route('/', {
    action: (params, queryParams) => {
        console.log('home page');
    }
})

FlowRouter.route('/newRecipe', {
    action: (params, queryParams) => {
        console.log('New recipe page');
    }
})

FlowRouter.route('/recipe/:id', {
    action: (params, queryParams) => {
        console.log(`view recipe page for recipe ${params.id}`);
    }
})