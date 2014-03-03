var Item = Backbone.Model.extend({
	idAttribute: "_id",

	defaults:{
		itemDescription: 'Walk the dog',
		complete : false 
	},

	toggle: function() {
	      this.save({done: !this.get("complete")});
	    }
});

var ItemsCollection = Backbone.Collection.extend({
	model: Item,

	url: 'http://0.0.0.0:3000/collections/jensitemlist' 
});