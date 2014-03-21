var Router = Backbone.Router.extend({

	routes: {
		'': 'index'
	},

	initialize: function() {
		this.items = new ItemsCollection();

		this.items.on('add', function(item){
			new ListView({model: item});
		});		
	},

	index: function(){
		new MainView();

		this.items.fetch({
			success: function(items){
				items.each(function(item){
					console.log('fetching?')
					new ListView({model: item})
				});
			}
		});
	}	
});
