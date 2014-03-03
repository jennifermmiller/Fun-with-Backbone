//Way to only show delte btn on hover?
//Needs to be styled
//Add lists on bottom

var ListView = Backbone.View.extend({
	tagName: 'li',

	createTemplate: _.template($('#list-template').text()),

	events: {
		'click .complete-item' : 'done',
		'dblclick .item-description' : 'edit',
		'keypress .edit-item' : 'saveEdit',
		'click .delete-item': 'destroy'
	},

	initialize: function(){
		$('.list-items').append(this.el);
		this.render();
		
		this.listenTo(this.model, 'add', this.render);
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},

	done: function(){
		this.model.set('complete', !this.model.get('complete'));
		this.$el.toggleClass('completed');
	},

	edit: function(){
		var editTemplate = _.template($('#edit-template').text());
		this.$el.html(editTemplate(this.model.attributes));
		this.$el.find('.edit-item').focus();
	},

	saveEdit: function(enter){
		if(enter.which === 13) {
			var editDescription = this.$el.find('.edit-item').val();
			this.model.save({itemDescription: editDescription});
		}
	},

	destroy: function(){
		this.model.destroy();
	}
});
