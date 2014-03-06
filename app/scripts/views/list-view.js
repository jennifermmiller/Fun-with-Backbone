//View og indiviual list items
var ListView = Backbone.View.extend({
	tagName: 'li',

	createTemplate: _.template($('#list-template').text()),

	events: {
		'click .complete-item' : 'done',
		'dblclick .item-description' : 'edit',
		'keypress .edit-item' : 'saveEdit',
		'click .delete-item': 'destroy',
		'click .js-focus': 'getFocus'
	},

	initialize: function(){
		$('.list-items').append(this.el);
		
		this.render();
		
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
		this.$el.toggleClass('complete', this.model.get('complete'));
	},

	done: function(){
		this.model.toggleComplete();
		this.$el.toggleClass('completed');
	},

	edit: function(){
		var editTemplate = _.template($('#edit-template').text());
		this.$el.html(editTemplate(this.model.attributes));
		this.$el.find('.edit-item').focus();
	},

	//fix this...clear edit field w/o having to change anything?
	saveEdit: function(enter){
		if(enter.which === 13) {
			var editDescription = this.$el.find('.edit-item').val();
			this.model.save({itemDescription: editDescription});
		}
	},

	destroy: function(){
		this.model.destroy();
	},

	//fix this too!
	// getFocus: function(){
	// 	var id = this.model.get('id');
	// 	this.$el.find('.js-focus').attr('href', '/todo/'+id});	
	// }
});
