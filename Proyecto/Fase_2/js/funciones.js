function generar(numero){
	var top = $('.top-100');
	var string = "";
	string+='<table id="tabla-top" class="table table-bordered fuente-mine" cellspacing="0" width="100%"><thead><tr><th>User</th><th>Puntos</th><th>Raza</th></tr></thead><tfoot><tr><th>User</th><th>Puntos</th><th>Raza</th></tr></tfoot><tbody>';
	for (var i = 0; i <numero; ++i) {
		string+= "<tr class = fuente-mine><td>Usuario " + (i+1) + " </td><td>" + Math.floor((Math.random()*5000) + 1)  + "</td><td>Humano</td></tr>";
	};
	string+="</tbody></table>";
	top.append(string);
	$('#tabla-top').dataTable({
		
		"lengthMenu" : [[25,50,100],[25,50,100]],
		"searching" : false,
		"pagingType": "simple",
		"language" : {
			"lengthMenu" : "Mostrando _MENU_ usuarios por pagina",
			"zeroRecords" : "No existen usuarios",
			"info" : "Mostrando pagina _PAGE_ de _PAGES_",
		    "loadingRecords": "Cargando...",
		    "processing":     "Procesando...",
		    "search":         "Buscar:",
			"paginate" :
				{
					"first" : "Primero",
					"last" : "Ultimo",
					"next" : "Siguiente",
					"previous" : "Anterior"
				}
		},
		"order":[[1,"desc"]]

	});
}

window.onload=function(){
	generar(100);
}

function volver(){
	// redirigir  la pagina menu.html
	document.location.href="../index.html";
}

$("intento1.html").ready(function() {
$(".contenido_tab").hide(); //Ocultar capas
$("ul.tabs li:first").addClass("activa").show(); //Activar primera pestaña
$(".contenido_tab:first").show(); //Mostrar contenido primera pestaña

// Sucesos al hacer click en una pestaña
$("ul.tabs li").click(function() {
$("ul.tabs li").removeClass("activa"); //Borrar todas las clases "activa"
$(this).addClass("activa"); //Añadir clase "activa" a la pestaña seleccionada
$(".contenido_tab").hide(); //Ocultar todo el contenido de la pestaña
var activatab = $(this).find("a").attr("href"); //Leer el valor de href para identificar la pestaña activa 
$(activatab).fadeIn(); //Visibilidad con efecto fade del contenido activo
return false;
});
});
