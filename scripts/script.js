window.addEventListener("DOMContentLoaded",()=>{
 
  let navigeishen = document.getElementById('naviaa');
  let burgea = document.getElementById('burgerIa');
   burgea.addEventListener('click', function(){
      navigeishen.classList.add('neewigeishen')
   });
  
  
  
   const vinoEnglish = document.querySelector('.vino');
  
   vinoEnglish.addEventListener('mouseover', function () {
     vinoEnglish.textContent = "ღვინო";
   });
  
   vinoEnglish.addEventListener('mouseout', function () {
     vinoEnglish.textContent = "VINO";
   });
  
  
  
  
   const vinoSpanish = document.querySelector('.lamejor');
  
   vinoSpanish.addEventListener('mouseover', function () {
     vinoSpanish.textContent = "ღვინოებსი საუკეთესო არჩევანი";
   });
  
   vinoSpanish.addEventListener('mouseout', function () {
     vinoSpanish.textContent = "LA MEJOR SELECCION DE VINOS";
   });
   
  
   const descrubeFrench = document.querySelector('.descrube');
  
   descrubeFrench.addEventListener('mouseover', function () {
     descrubeFrench.textContent = "ღვინოებსი საუკეთესო არჩევანი!";
   });
  
   descrubeFrench.addEventListener('mouseout', function () {
     descrubeFrench.textContent = "DESCUBRE NUESTRO CATALOGO COMPLETO";
   });
  
  
});
