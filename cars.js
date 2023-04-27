const miBoton = document.getElementById("miBoton");
const miImagen = document.getElementById("miImagen");
const bmw = document.getElementById("bmw")
const mustang = document.getElementById("mustang")
const mercedes = document.getElementById("mercedes")
const texto = document.getElementById("texto")

miBoton.addEventListener("click", function() {
    imagen1.src = "./images/Roll-Royce.png";
    imagen2.src = "./images/Rolls-Royce.jpg";
    imagen3.src = "./images/Rolls-Royce3.jpg";
    imagen4.src = "./images/Rolls-Royce2.jpg";
});

bmw.addEventListener("click", function() {
    imagen1.src = "./images/bmw.jpg";   
    imagen2.src = "./images/bmw.png";
    imagen3.src = "./images/bmw3.jpg";
    imagen4.src = "./images/bmw4.jpg";
});

mustang.addEventListener("click", function() {
    imagen1.src = "./images/red-mustang.jpg";
    imagen2.src = "./images/mustang2.jpg";
    imagen3.src = "./images/mustang3.jpg";
    imagen4.src = "./images/mustang4.jpg";
});

mercedes.addEventListener("click", function() {
    imagen1.src = "./images/mercedes.jpg";
    imagen2.src = "./images/mercedes2.jpg";
    imagen3.src = "./images/mercedes3.jpg";
    imagen4.src = "./images/mercedes4.jpg";
});