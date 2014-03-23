console.log('Time to make a sweet todo list!');

$(document).ready(function(){
	Parse.initialize('Q2dpmPjadkOev3PbLmYPU9HnH0poaMBP2lY2DwNj', 'oS1PQTCi1wT19J6hMYv0OtkK5m1vxjpYPzYouJ1Z');

	window.router = new Router();

	Backbone.history.start();

});