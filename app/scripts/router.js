var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
		'complete-items': 'completeItems',
		'active-items': 'activeItems'
	},

	initialize: function() {
		this.items = new ItemsCollection();

		this.items.on('add', function(item){
			new ListView({model: item});
		});		
	},

	index: function(){
		$('.list-items').empty();
		new MainView();

		this.items.fetch({
			success: function(items){
				items.each(function(item){
					new ListView({model: item})
				});
			}
		});
	},

	completeItems: function(){
		$('.list-items').empty();
		var query = new Parse.Query(ItemClass);
		query.equalTo('complete', true);
		query.find({
			success: function(items){
				_.each(items, function(item){
					new ListView({model: item});
				});
			}
		});
	},

	activeItems: function(){
		$('.list-items').empty();
		var query = new Parse.Query(ItemClass);
		query.equalTo('complete', false);
		query.find({
			success: function(items){
				_.each(items, function(item){
					new ListView({model: item});
				});
			}
		});
	}

});
