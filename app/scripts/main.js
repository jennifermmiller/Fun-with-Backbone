console.log('Wazzzzzupppp man?!');

$(document).ready(function(){
	Parse.initialize("Q2dpmPjadkOev3PbLmYPU9HnH0poaMBP2lY2DwNj", "oS1PQTCi1wT19J6hMYv0OtkK5m1vxjpYPzYouJ1Z");

	window.router = new Router();

	Backbone.history.start();

});



//A lengthy list of things to fix:
	//Get router working, so user can use it to only see one item...maybe at this point it als displays details or an img....or probably not
	//Add lists on bottom (done,active,remaining,etc)
	//Fix edit fn so that can escape without modifiying entry
		//Also, shoulf this be under the model???
	//Needs to be styled
		//only show delte/focus btns on hover
