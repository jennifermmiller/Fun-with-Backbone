var ListView = Backbone.View.extend({

	createTemplate: _.template($('#list-template').text()),

	events: {
		'click .complete-item' : 'done', 
		'dblclick .item-description' : 'edit',
		'keypress .edit-item' : 'saveEdit',
		'click .delete-item': 'destroy'
	},

	initialize: function(){
		$('.js-list-stream').append(this.el);
		this.render();
		
		this.listenTo(this.model, 'add', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},

	done: function(){

	},

	edit: function(){
		var editTemplate = _.template($('#edit-item-template').text());
		this.$el.html(editTemplate(this.model.attributes));
	},

	saveEdit: function(enter){
		if(enter.keyCode === 13) {
			var editDescription = this.input.val();
			this.model.save({itemDescripton: editDescription});
			
		}

	},

	destroy: function(){
		this.model.destroy();
	}
});


// var EditView = Backbone.View.extend({
// 	className: 'edit-item',

// 	createTemplate: _.template($('#edit-template').text()),

// 	initialize: function(){
// 		$('.item-description').html(this.el);
// 		this.render();
// 	},

// 	render: function(){
// 		this.$el.html(this.createTemplate(this.model.attributes));
// 	}
// });