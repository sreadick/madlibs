$(document).on("ready", function() {
	var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
	var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
	
	var mdOutput;
	

	$("#create").on("click",function(){
		var random1 = Math.floor((Math.random() * startupX.length));
		var random2 = Math.floor((Math.random() * startupY.length));
		mdOutput = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
		$("#xForY").text(mdOutput);
	});

	var favs = []
	$("#save").on("click",function(){
		favs.push(mdOutput);
	});

	$("#print").on("click",function(){
		var allFavs = "";
		for (var i = 0; i < favs.length; ++i) {
			allFavs += favs[i] + "...";
		}
		$("#favorites").text(allFavs);
	});
});