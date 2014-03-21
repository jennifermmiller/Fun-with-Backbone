//add model instance to page and to collection 
//fetch collection

var MainView = Parse.View.extend({

	events:{
		'click .js-add-btn': 'addTodoItem',
		//'keypress .js-item-input': 'addTodoItem' ...how to add this into same???
	},

	initialize: function(){
		window.items = new ItemsCollection();
	
		this.fetchListItems();

		$('.js-add-btn').click(function(){
			addTodoItem();
		});

		$('.js-item-input').on('keypress', function(enter){
			if(($('.js-item-input').val() !== '') && (enter.which === 13)){
				addTodoItem();
			}
		});
	},

	fetchListItems: function(){
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
	},
});

function addTodoItem (e){
	if($('.js-item-input').val() !== '')  {
		var newItem  = {
			itemDescription: $('.js-item-input').val(),
		};

		var newTodo = items.add(newItem);

		new ListView({model: newTodo});

		newTodo.save();
	}

	$('.js-item-input').val('');
}




