var tabela = document.querySelector("#tabela-pacientes");
 tabela.addEventListener("click", function(event){
   event.target.parentNode.remove();
 });