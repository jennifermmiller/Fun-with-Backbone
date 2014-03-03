console.log('Wazzzzzupppp man?!');

$(document).ready(function(){
	window.items = new ItemsCollection();
	
	fetchListItems();

	$('.js-add-btn').click(function(){
		addTodoItem();
	});

	$('.js-item-input').on('keypress', function(enter){
		if(($('.js-item-input').val() !== '') && (enter.which === 13)){
			addTodoItem();
		}
	});
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

function addTodoItem(){
	if($('.js-item-input').val() !== '') {
		var newItem  = {
			itemDescription: $('.js-item-input').val(),
		};

		var newTodo = items.add(newItem);

		new ListView({model: newTodo});

		newTodo.save();
	}

	$('.js-item-input').val('');
}