const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log();
   
const botonapretado = boton.textContent;

if (pantalla.textContent === "0") {
    pantalla.textContent = botonapretado;
} else {
pantalla.textContent += botonapretado; }

})
   })

