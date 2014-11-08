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
		}

	});
}

window.onload=function(){
	generar(100);
}
