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

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}  

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
} 

