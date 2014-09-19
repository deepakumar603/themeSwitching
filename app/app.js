import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = false;

//Custom Resolver for theming
var customResolver = Resolver.extend({
  resolveTemplate: function(parsedName) {
    var themeName = (Ember.$('meta[name="theme"]')).attr('content');
    if (themeName ===""){    
    	return this._super(parsedName);
	}
	else {
		parsedName.fullNameWithoutType = themeName + "/" + parsedName.fullNameWithoutType;
		return this._super(parsedName);
	}
  }
});

var App = Ember.Application.extend({
  modulePrefix: 'theme-switching', // TODO: loaded via config
  Resolver: customResolver
});

loadInitializers(App, 'theme-switching');

export default App;
