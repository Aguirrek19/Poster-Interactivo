
const circulo = document.getElementById("circulo");

document.addEventListener("mousemove", (evento) => {
    circulo.style.left = evento.clientX + "px";
    circulo.style.top = evento.clientY + "px";
});
