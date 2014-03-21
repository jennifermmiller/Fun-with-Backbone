//Goal: to keep everyone's hands to themselves
//Toggle is in here b/c it's changing an attribute of a model
//Should edit be plaved in here somehow? Technically also changing the model

var ItemClass = Parse.Object.extend({
	className: 'ItemClass'

	// defaults: {
	// 	itemDescription: 'Why have a todo item with nothing on it? You sill goose!',
	// 	complete: false		
	// },

	// toggleComplete: function(){
	// 	this.set('complete', !this.get('complete'));
	// }
});



//Don't know if I'll do that bottom stuff yet, may not need the methods
var ItemsCollection = Parse.Collection.extend({
	model: ItemClass

	// complete: function(){
	// 	return this.where({complete: true})
	// },

	// remaining: function(){
	// 	return this.where({complete: false})
	// }
});