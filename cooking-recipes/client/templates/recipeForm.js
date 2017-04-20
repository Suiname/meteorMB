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
  },
  canShow: () => {
    let result = true;
    if (!Meteor.userId()) {
      result = false;
    } else {
      const recipeId = FlowRouter.getParam('id');
      const recipe = Recipes.findOne(recipeId);
      if (recipe) {
        result = recipe.owner == Meteor.userId();
      }
    }
    if (result) {
      return true;
    }
    return FlowRouter.redirect('/');
  },
  isPrivate: () => {
    const recipeId = FlowRouter.getParam('id');
    const recipe = Recipes.findOne(recipeId);
    if (!recipe) {
      return false;
    }
    return recipe.private ? 'checked' : false;
  }
});

Template.recipeForm.events({
  'submit #recipeForm' (event) {
    event.preventDefault();
    const data = {
      title:        event.target.querySelector('#title').value,
      ingredients:  event.target.querySelector('#ingredients').value,
      instructions: event.target.querySelector('#instructions').value,
      private:      event.target.querySelector('#private').checked,
    };
    const recipeId = FlowRouter.getParam('id');
    if (recipeId) {
      Recipes.update(recipeId, { $set: data });
    } else {
      Meteor.call('insertRecipe', data, (err, result) => {
        if (err) {
          console.log('we have an error');
        }
      });
    }
    FlowRouter.go('/');
  },
});