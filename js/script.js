function validateForm() {
  //constantes que guardan los elementos del formulario
  const form = document.getElementById("contactForm")
  const name = document.getElementById("nameId")
  const surname = document.getElementById("surnameId")
  const email = document.getElementById("emailId")
  const textArea = document.getElementById("textAreaId")
  //expresiones regulares para validar el nombre, apellido y email. Nombre y apellido solo aceptan letras, el email tiene que tener un formato de email
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;      
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  //variables que guardan lo ingresado en el formulario
  localStorage.setItem("name", name.value);
  localStorage.setItem("surname", surname.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("textArea", textArea.value);
  
  form.addEventListener("submit", (e) => {
    //remueve los bordes rojos 
    document.getElementById("nameId").classList.remove("border-danger");
    document.getElementById("surnameId").classList.remove("border-danger");
    document.getElementById("emailId").classList.remove("border-danger");
    document.getElementById("textAreaId").classList.remove("border-danger");
    //remueve los mensajes de error
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("surnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("textAreaError").innerHTML = "";

    //contador de errores
    let errorsCount = 0;
    //valida que los campos no esten vacios y que cumplan con las expresiones regulares
    if (name.value === "" || name.value == null || !nameRegex.test(name.value)) {
      errorsCount++;
      //agrega el mensaje de error
      document.getElementById("nameError").innerHTML = "Verifique su nombre";      
      //agrega el borde rojo al input
      document.getElementById("nameId").classList.add("border-danger")
    }
    if (surname.value === "" || surname.value == null || !nameRegex.test(surname.value)) {
      errorsCount++;
      document.getElementById("surnameError").innerHTML = "Verifique su apellido";
      document.getElementById("surnameId").classList.add("border-danger")
    }
    if (email.value === "" || email.value == null || !emailRegex.test(email.value)) {
      errorsCount++;
      document.getElementById("emailError").innerHTML = "Verifique su email";
      document.getElementById("emailId").classList.add("border-danger")
    }
    if (textArea.value === "" || textArea.value == null) {
      errorsCount++;
      document.getElementById("textAreaError").innerHTML = "Ingrese un mensaje";
      document.getElementById("textAreaId").classList.add("border-danger")
    }
    //si hay errores no envia el formulario
    if (errorsCount > 0) {
      //evita que se envie el formulario
      e.preventDefault();      
    }
  });

}

a=true;

$(document).ready(() => {
  $('#sec_contact').hide();
  $('#form-footer').click(function(){
    if(a){
      $('#sec_contact').show(); 
      a=false;
    }
    else{
      $('#sec_contact').fadeToggle();
      a=true;
    }
  })   
  
  $('#nav_contact').click(function(){
    if(a){
      $('#sec_contact').show(); 
      a=false;
    }
    else{
      $('#sec_contact').fadeToggle();
      a=true;
    }
  }) 
});
