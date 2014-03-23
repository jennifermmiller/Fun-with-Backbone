var MainView = Backbone.View.extend({
	className: 'add-item',

	template: _.template($('#start-list-template').text()),

	//This doesnt really belong here...should be fixed at some point
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
	}
});


//Need to integrate this
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
				console.log('Too bad! Looks like: ' + error);
			}
		});

		$('.item-input').val('');
	}
}