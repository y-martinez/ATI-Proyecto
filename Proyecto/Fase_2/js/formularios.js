$(document).ready(function(){
	registro = $("#formulario_registro");
	registro.submit(function(evento){
		if(!$("#btn-registrar").hasClass("registro-completo")){
		
			var nombre = $("input#user");
			var sigue = true;
			/*HACER CONSULTA AJAX*/

			if(nombre.val() === "ybra1993"){ //Se encuentra registrado
				$("#us").addClass("has-warning");
				nombre.addClass("alet alert-warning");
				nombre.attr({
					"data-toggle" : "tooltip",
					"data-original-title" : "Username se encuentra en uso"
				});
				nombre.tooltip({placement : 'top'});
				sigue = false;

			}else if (nombre.hasClass("alet")){
				nombre.toggleClass("alet alert-warning");
				nombre.removeAttr("data-toggle");
				nombre.removeAttr("data-original-title");
				$("#us").toggleClass("has-warning");

			}
			var correo1 = $("input#email1");
			var correo2 = $("input#email2");

			
			if(correo1.val() !== correo2.val()){
				$("#correo").addClass("has-error");
				correo1.addClass("alet alert-danger");
				correo2.addClass("alet alert-danger");
				correo1.attr({
					"data-toggle" : "tooltip",
					"data-original-title" : "Error los correos no coinciden"
				});
				correo1.tooltip({placement : 'top'});
				sigue = false;
			}else if(correo1.val().search(".") < 0 || correo2.val().search(".") < 0){
				$("#correo").addClass("has-error");
				correo1.addClass("alet alert-danger");
				correo2.addClass("alet alert-danger");
				correo1.attr({
					"data-toggle" : "tooltip",
					"data-original-title" : "Error introduzca correos validos"
				});
				correo1.tooltip({placement : 'top'});
				sigue = false;

			}else if(correo1.hasClass("alet")){
				correo1.toggleClass("alet alert-danger");
				correo2.toggleClass("alet alert-danger");
				correo1.removeAttr("data-toggle");
				correo1.removeAttr("data-original-title");
				$("#correo").removeClass("has-error");
			}

			var pass1 = $('input#pass1');
			var pass2 = $('input#pass2');

			if(pass1.val() !== pass2.val()) {
				$("#contra").addClass("has-error");
				pass1.addClass("alet alert-danger");
				pass2.addClass("alet alert-danger");
				pass1.attr({
					"data-toggle" : "tooltip",
					"data-original-title" : "Error las contraseñas no coinciden"
				});
				pass1.tooltip({placement : 'top'});
				sigue = false;
			}else if(pass1.hasClass("alet")){
				pass1.toggleClass("alet alert-danger");
				pass2.toggleClass("alet alert-danger");
				pass1.removeAttr("data-toggle");
				pass1.removeAttr("data-original-title");
				$("#contra").removeClass("has-error");
			}
			if(!sigue)
				evento.preventDefault();
			else{
				evento.preventDefault();
				$("#confirmar").modal({
		            show: true,
		            keyboard: false,
		            backdrop: 'static'
	        	});

				var option_raza = $("#raza-option").val();

				var string_image="<center><img src=";
				switch(option_raza){

					case 'Enano':  string_image+= "../images/aviso_enano.png><center><center>"; break;
					case 'Elfo':   string_image+= "../images/aviso_elfo.png><center><center>"; break;
					case 'Mago':   string_image+= "../images/aviso_mago.png><center><center>"; break;
					case 'Humano': string_image+= "../images/aviso_humano.png><center><center>"; break;
				}
				$("#body-modal-registro").append(string_image);
				$("#bien-regi").append("<center><p> Bienvenido "+ nombre.val() + " a <span class = 'titulos' style='color:black'>Middle Craft</span> esperamos que pase un buen rato</p></center>");
				
				$("#btn-confirmar").click(function(){
					$("#btn-registrar").toggleClass("registro-completo");
				    $("#formulario_registro").submit();
				});
			}
		}else{
			console.log("Registro completo\n");
			document.location.href="../index.html";	
		}
	});

	recuperar=$("#btn-enviar-con");
	recuperar.click(function(){
		$("#form-recuperar")[0].checkValidity();


	});
	$(".modal").on('hidden.bs.modal', function (e) {
	  $(this)
	    .find("input,textarea,select")
	       .val('')
	       .end()
	    .find("input[type=checkbox], input[type=radio]")
	       .prop("checked", "")
	       .end();

	});
})