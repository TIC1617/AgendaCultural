function formEventsValidation(validate){
	if (validate == 0){
		var request = confirm("¿Estás seguro?");
		if (request == true){
			alert("Evento rechazado, el creador del evento recibirá un email con esta acción");
			location.reload(); 
		}
	}else{
		$.ajax({
			type: 'post',
			url: "http://vps281500.ovh.net/agendacultural/ajax.php",
			data: {action : 'eventsValidation'},
			success: function(data) {
				alert(data);
				location.reload(); 
			}
		});
	}

}

function formLoginValidation(){
	$.ajax({
		type: 'post',
		url: "http://vps281500.ovh.net/agendacultural/ajax.php",
		data: {action : 'loginValidation'},
		success: function(data) {
			alert(data);
			location.reload();
			window.location.href = "index.html";
		}
	});
}
