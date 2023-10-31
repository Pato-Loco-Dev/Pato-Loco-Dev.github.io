let botaoPesquisar = document.getElementById("search-for-id");


botaoPesquisar.addEventListener('click', (event) =>{ /*arrow function*/
    
    event.preventDefault();

    var idInput = document.getElementById("id-car");
    var id = idInput.value;

    var urlBuscaAPI = `http://localhost:8080/veiculos/veiculos-a-venda/${id}`

    fetch(urlBuscaAPI).then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível obter os dados da API.');
        }
        return response.json(); 
      })
      .then(data => {
        displayCarro(data)
        console.log(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao chamar a API:', error);
      });
    



});
    

function displayCarro(data) {
    
    const objeto = data;
    const listaCarros = document.getElementById("carros-a-venda");
    const veiculo = objeto.veiculo; 
    const imageUrl = veiculo.foto;
    
    var liExistente = document.querySelector("#carros-a-venda li");

    if (liExistente) {
        // Se já existe um elemento li, atualize o conteúdo
        liExistente.innerHTML = `<h3>${veiculo.modelo}</h3>
        <img src="${veiculo.foto}" class="produtos-carros">
        <br> <br>
        <p class="produtos-descricao">${veiculo.modelo} ${veiculo.litragem} ${veiculo.anoFab}</p>
        <p class="produtos-preco">R$${veiculo.valor}</p>
        <br> <br>`;
    } else {
        const li = document.createElement("li");
        const img = document.createElement("img");
        
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
  
