console.log('Wazzzzzupppp man?!');

var items = new ItemsCollection();

$(document).ready(function(){
	Parse.initialize("ASBuupS1Tq2QUgghffz1iI0nUhqtJuF11RccdEYk", "zPckGqzTdAXdIoZASCTSnytULuLYIUjkKOtOsOp1");

	// items.fetch({
	// 	success: function(collection){
	// 		collection.each(function(item){
	// 			new ListView({model: item})
	// 		});

	// 	}
	// })

	router = new Router();
	router.start();


});


//Way to only show delte btn on hover?
//Needs to be styled
//Add lists on bottom