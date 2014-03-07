var MainView = Backbone.View.extend({
	className: 'add-item',

	//template: _.template($('#start-list-template').text()),

	events:{
		'click .js-add-btn': 'addTodoItem',
		
	},

	initialize: function(){
		//$('.jubotron').html(this.el);
		//this.$el.html(this.template());

		this.items = new ItemsCollection();

		this.fetchListItems();

		$('.js-add-btn').click(function(){
			this.addTodoItem();
		});

		$('.js-item-input').on('keypress', function(enter){
			if(($('.js-item-input').val() !== '') && (enter.which === 13)){
				this.addTodoItem();
			}
		});
	},

	fetchListItems: function(){
		this.items.fetch({
			success: function(){
				console.log('Hurray! Items fetched!');
			},
			error: function(){
				console.log('Error! Cannot load item.');
			}
		});
	},

	addTodoItem: function(){
		if($('.js-item-input').val() !== '')  {
			var newItem  = {
				itemDescription: $('.js-item-input').val(),
				id: _.uniqueId('todo')
			};

			this.items.add(newItem);

			new ListView({model: newTodo});

			newTodo.save();
		}

		$('.js-item-input').val('');
	},
});
