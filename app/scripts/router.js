var Router =  Backbone.Router.extend({

	routes:{
		'': 'index',
		'todo/:id': 'focus'
	},

	start: function(){
		Backbone.history.start({pushState: true})
	},

	initialize: function(){
		this.items = new ItemsCollection();

		new MainView();
	},

	index: function(){
		
	},
	
});



function fetchListItems(){
		items.fetch({
			success: function(){
				items.each(function(item){
					new ListView({model: item});
					console.log('An item has been added.');
				});
			},
			error: function(){
				console.log('Error! Cannot load item.');
			}
		});
	}
