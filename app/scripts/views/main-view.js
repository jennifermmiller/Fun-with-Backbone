var MainView = Backbone.View.extend({
	className: 'add-item',

	template: _.template($('#start-list-template').text()),

	//This doesnt really belong here...
	events:{
		'click .js-add-btn': 'addTodoItem',

	},

	initialize: function(){
		$('.jubotron').html(this.el);
		this.$el.html(this.template());

		$('.js-add-btn').click(function(){
			addTodoItem();
			$('js-item-input').empty();
		});

		$('.js-item-input').on('keypress', function(enter){
			if(($('.js-item-input').val() !== '') && (enter.which === 13)){
				addTodoItem();
				$('js-item-input').val('');
			}
		});
	},

	clearComplete: function(){
		console.log('what');
	}

	// clearComplete: function(){
	// 	console.log('here?');
	// 	// var destroyArray = _.where(router.items, {complete: true});
	// 	// console.log(destroyArray);
	// 	// _.each(destroyArray, function(item){
	// 	// 	item.destroy();
	// 	// }); 
	// }
});


//Helper function:
function addTodoItem (){
	var item = new ItemClass();

	if($('.js-item-input').val() !== '') {
		item.set('itemDescription', $('.js-item-input').val());

		router.items.add(item);
		
		item.save(null, {
			success: function(result){
				console.log('Sweet, Sweet success!');
			},
			error: function(result, error){
				console.log("Too bad! Looks like: " + error);
			}
		});

		$('.item-input').val('');
	}
}

$('.clear-complete-items').click(function(){
	var destroyArray = _.where(router.items.model, {complete: true});
			console.log(destroyArray);
			_.each(destroyArray, function(item){
				item.destroy();
			 });
})