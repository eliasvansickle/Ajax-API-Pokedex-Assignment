var imgUrl = function() {
	for (var i = 1; i < 152; i++) {
		$("#pokemon").append('<img id="'+i+'" src="http://pokeapi.co/media/img/'+i+'.png">');

	};
};

var data = function() {
			var id = "";
			$("img").click(function() {
				id = $(this).attr("id");
				$.get("http://pokeapi.co/api/v1/pokemon/"+id+"/", function(res) {
					
				}, "json");



	});
};



$(document).ready(function() {
	imgUrl();
	data();
});


