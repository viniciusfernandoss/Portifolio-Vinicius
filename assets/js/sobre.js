
const texto = "Sobre Mim";
const elemento = document.getElementById("titulo-sobre-mim");
let index = 0;

function digitar() {
if (index < texto.length) {
    elemento.innerHTML += texto.charAt(index);
    index++;
    setTimeout(digitar, 200); // velocidade da digitação (150ms por letra)
}
}

// Iniciar a animação após o carregamento da página
window.onload = digitar;