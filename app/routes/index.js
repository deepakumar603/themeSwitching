import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//alert(theme);
		//if (theme===index {}){
    return this.store.find('index');
//}
  }
});
