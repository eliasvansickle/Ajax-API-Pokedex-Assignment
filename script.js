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

					var types = "";
					types += "<h4>Types</h4>";
					types += "<ul>";
					for(var i = 0; i <res.types.length; i++) {
						types += "<li>" + res.types[i].name + "</li>";
					};
					types += "</ul>"
					$(".types").html(types);

					var height = "";
					height += "<h4>Height</h4>";
					height += "<p>" + res.height + "</p>";
					$(".height").html(height);

					var weight = "";
					weight += "<h4>Weight</h4>";
					weight += "<p>" + res.weight + "</p>";
					$(".weight").html(weight);



				}, "json");



	});
};



$(document).ready(function() {
	imgUrl();
	data();
});


