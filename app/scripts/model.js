//Goal: to keep everyone's hands to themselves
//Toggle is in here b/c it's changing an attribute of a model
//Should edit be plaved in here somehow? Technically also changing the model

var ItemClass = Parse.Object.extend('ItemClass',{ 
	defaults:{
		itemDescription: 'Why have a todo item with nothing on it? You sill goose!',
		complete: false,	
	},

	toggleComplete: function(){
		this.set('complete', !this.get('complete'));
		this.save(null, {
			success: function(item){
				console.log('Complete status has been updated!');
			}
		});
	}
});


var ItemsCollection = Parse.Collection.extend({
  model: ItemClass
});