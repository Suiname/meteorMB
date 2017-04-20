if (Meteor.isClient) {
  BlazeLayout.setRoot('#main-container');
}

FlowRouter.route('/', {
  waitOn: () => Accounts.loginServicesConfigured(),
  action: (params, queryParams) => {
    console.log('home page');
    BlazeLayout.render('listing');
  },
});

FlowRouter.route('/newRecipe', {
  action: (params, queryParams) => {
    BlazeLayout.render('recipeForm');
  },
});

FlowRouter.route('/recipe/:id', {
  action: (params, queryParams) => {
    BlazeLayout.render('recipe');
  },
});

FlowRouter.route('/editRecipe/:id', {
  action: (params, queryParams) => {
    BlazeLayout.render('recipeForm');
  },
});