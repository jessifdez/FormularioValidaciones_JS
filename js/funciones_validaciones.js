function cargarOyentes(){
	//document.getElementById("nombre").onblur=verificarNombre;
	document.getElementById("nombre").onblur=function(){verificarNombre();}
	document.getElementById("apellido").onblur=function(){verificarApellido();}
	document.getElementById("email").onblur=function(){verificarEmail();}
	document.getElementById("edad").onblur=function(){verificarEdad();}
	document.getElementById("dni").onblur=function(){verificarDNI();}
}
function verificarNombre(){
	var nombre=document.getElementById("nombre");
	//if(nombre==null || nombre.length == 0 || /^\s+$/.test(nombre)){
		//Poner campo en rojo y sacar alert
	if(nombre.value==""){
		nombre.style.borderColor="red";
	}else{
		//Poner campo en verde
		nombre.style.borderColor="green";
	}
}
function verificarApellido(){
	var apellido=document.getElementById("apellido");
	if(apellido.value==""){
		apellido.style.borderColor="red";
	}else{
		//Poner campo en verde
		apellido.style.borderColor="green";
	}
}
function verificarEmail(){
	var email=document.getElementById("email");
	var email_ok=validateEmail(email.value);
	if(email_ok==true){
		email.style.borderColor="green";
	}else{
		email.style.borderColor="red";
	}
}	
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function verificarEdad(){
	var edad=document.getElementById("edad");
	if(edad.value<1 || edad.value>100){
		edad.style.borderColor="red";
	}else{
		edad.style.borderColor="green";
	}
}
function verificarDNI(){
	var dni_ok=validarDNI();
	if(dni_ok){
		document.getElementById("dni").style.borderColor="green";
	}else{
		document.getElementById("dni").style.borderColor="red";
	}
}
function validarDNI(){
	var dni=document.getElementById("dni").value;
	//Verifico que tiene 9 caracteres:
	if(dni.length!=9)
		{
		alert("Longitud incorrecta");
		return false;
		}
	var numero=dni.substr(0,8);//substr(inicio, numero_caracteres)
	// isNaN("pepe"); true porque "pepe" is not a number
	// isNaN(23); false porque 23 NO is not a number
	if(isNaN(numero)==true)
	{
	//alert("Los 8 primeros caracteres deben ser numéricos");
	return false;
	}
	//var letra=dni.substr(8,1);
	var letra=dni.charAt(8);
	if(isNaN(letra)==false) //
	{
	//alert("El último caráctere debe ser una letra");
	return false;
	}
	var resto=	numero%23;//% es la funcion modulo y devuelve el resto
	var letras="TRWAGMYFPDXBNJZSQVHLCKE";
	var letra_correspondiente=letras.charAt(resto);
	if(letra!=letra_correspondiente)
	{
	//alert("La letra no coincide");
	return false;
	}
	//alert("El DNI es correcto");
	return true;
}