'use strict';

var Emberquiz = Ember.Application.create();

EmberQuiz.Router.map(function() {
	this.route('About', {path:'/About'})
});

EmberQuiz.AboutRoute = Ember.Route.extend({
	model: function(){
		return {stuff: 'This is the about page'}
	}
});

// expose Emberquiz globally
window.Emberquiz = Emberquiz;
