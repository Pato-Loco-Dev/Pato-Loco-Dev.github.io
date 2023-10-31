var botaoRegistrar = document.querySelector("#register-button");

botaoRegistrar.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var carroRetornado = obtemCarroDoFormulario(form);

    function obtemCarroDoFormulario(form) {
        let dados = {
            fabricante: form.querySelector("#fabricante").value,
            modelo: form.querySelector("#modelo").value,
            anoFab: form.querySelector("#anoFab").value,
            motor: form.querySelector("#motor").value,
            litragem: form.querySelector("#litragem").value,
            valor: form.querySelector("#valor").value,
            foto: form.querySelector("#foto").value,
        };
        return dados; // Retorna os dados da função
    }

    var carroRetornado = obtemCarroDoFormulario(form); // Chama a função e obtém os dados

    // Agora, você pode enviar os dados para o servidor
    fetch('http://localhost:8080/veiculos/veiculos-a-venda', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carroRetornado)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); 
        alert('Registro cadastrado com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao deletar o registro.');
    });
});
