$(document).ready(function() {
	var imgUrl = function() {
	for (var i = 1; i < 152; i++) {
		$("#pokemon").append('<img id="'+i+'" src="http://pokeapi.co/media/img/'+i+'.png">');
	}
};
imgUrl();









});