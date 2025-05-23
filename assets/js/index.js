document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio imediato
    const form = this;

    // Envia o formulário via JavaScript
    fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    }).then(response => {
    alert("Mensagem enviada com sucesso! Logo logo entrarei em contato. Obrigado!");
    form.reset(); // Limpa os campos
    }).catch(error => {
    alert("Ocorreu um erro. Por favor, tente novamente.");
    console.error(error);
    });
});           