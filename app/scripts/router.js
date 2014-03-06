var Router =  Backbone.Router.extend({

	routes:{
		'': 'index',
		'/:id': 'focus'
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
	},

	//broken:(
	focus: function(){
		// var focusItem = items.find(function(item){
		// 	return item.get('id') == id;
		// });

		new FocusView({model: this.model});
	}
	
});

