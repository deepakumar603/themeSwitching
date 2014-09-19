import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ThemeSwitchingENV.locationType
});

Router.map(function() {
  this.route('products');
});

export default Router;
