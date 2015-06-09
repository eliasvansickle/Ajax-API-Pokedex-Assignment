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
					var name = "";
					name += "<h1>"+res.name+"</h1>"
					$(".name").html(name);

					var img = "";
					img += '<img id="'+id+'" src="http://pokeapi.co/media/img/'+id+'.png">';
					$(".pic").html(img);


				}, "json");



	});
};



$(document).ready(function() {
	imgUrl();
	data();
});


