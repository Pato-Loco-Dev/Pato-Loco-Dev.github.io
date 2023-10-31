document.getElementById('botaoDeletar').addEventListener('click', function() {
    const idParaDeletar = document.getElementById('idParaDeletar').value;
    
    if (!idParaDeletar) {
        alert('Por favor, insira um ID válido.');
        return;
    }

    const apiUrl = `http://localhost:8080/veiculos/veiculos-a-venda/${idParaDeletar}`;
    
    fetch(apiUrl, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // A resposta da sua API
        alert('Registro deletado com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao deletar o registro.');
    });
});
