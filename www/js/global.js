function formEventsValidation(validate){
	if (validate == 0){
		var request = confirm("¿Estás seguro?");
		if (request == true){
			alert("Evento rechazado, el creador del evento recibirá un email con esta acción");
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
