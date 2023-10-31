// URL da sua API Quarkus
const apiUrl = 'http://localhost:8080/veiculos/veiculos-a-venda'; // Substitua com a URL da sua API

// Fazer a chamada à API usando o fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da API.');
    }
    return response.json(); 
  })
  .then(data => {
    
    displayCarros(data);
    console.log(data);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao chamar a API:', error);
  });


  function displayCarros(data) {
    const listaCarros = document.getElementById("carros-a-venda");
    for (let i = 0; i < data.length; i++) {
      const objeto = data[i];

        const veiculo = objeto.veiculo; 
        const li = document.createElement("li");
        const img = document.createElement("img");
        const imageUrl = veiculo.foto;
        img.src = imageUrl;

        li.innerHTML = `<h3>${veiculo.modelo}</h3>
                        <img src="${veiculo.foto}" class="produtos-carros">
                        <br> <br>
                        <p class="produtos-descricao">${veiculo.modelo} ${veiculo.litragem} ${veiculo.anoFab}</p>
                        <p class="produtos-preco">R$${veiculo.valor}</p>
                        <br> <br>`;
        listaCarros.appendChild(li);
    }
  }
  


// Função para fazer uma solicitação POST
function adicionarCarro(data) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Dados POST:', data);
    })
    .catch(error => {
      console.error('Erro ao fazer POST:', error);
    });
}

// Função para fazer uma solicitação PUT
function atualizarCarro(id, data) {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Dados PUT:', data);
    })
    .catch(error => {
      console.error('Erro ao fazer PUT:', error);
    });
}

// Função para fazer uma solicitação DELETE
function deletarCarro(id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.status === 204) {
        console.log('Registro excluído com sucesso.');
      } else {
        console.error('Erro ao fazer DELETE.');
      }
    })
    .catch(error => {
      console.error('Erro ao fazer DELETE:', error);
    });
}


