var FocusView = Backbone.View.extend({
	className: 'focus-view',

	createTemplate: _.template($('#focus-view-template').text()),

	initialize: function(){	
		$('.jumbotron').empty();
		$('.js-list-stream').html(this.el); 

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	},
});