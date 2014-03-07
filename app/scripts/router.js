var Router =  Backbone.Router.extend({

	routes:{
		'': 'index'
	},

	start: function(){
		Backbone.history.start({pushState: true})
	},

	initialize: function(){
		this.items = new ItemsCollection();

		this.items.on('add', function(item){
			new ListView({model: item});
		});

		new MainView();
		
	},

	index: function(){
		this.items.fetch();
	}
	
});

