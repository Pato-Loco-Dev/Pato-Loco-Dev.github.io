let botao = document.getElementById("change");






botao.addEventListener('click', (event) =>{ /*arrow function*/
    


event.preventDefault();

    var id = document.getElementById("id").value;
    var fabricante = document.getElementById("fabricante").value;
    var modelo = document.getElementById("modelo").value;
    var anoFab = document.getElementById("anoFab").value;
    var motor = document.getElementById("motor").value;
    var litragem = document.getElementById("litragem").value;
    var valorTexto = document.getElementById("valor").value;
    var foto = document.getElementById("foto").value;

    var valor = +valorTexto;

    var veiculo = {

        "fabricante": fabricante,
        "modelo": modelo,
        "anoFab": anoFab,
        "motor": motor,
        "litragem": litragem,
        "valor": valor,
        "foto": foto
    };

    var veiculoJSON = JSON.stringify(veiculo)

    console.log(veiculo);

    const apiUrl = "http://localhost:8080/veiculos/veiculos-a-venda";

    fetch(`${apiUrl}/${id}`,{
      mode:'cors',
      method: 'PUT',
      headers: {  
          'Content-type': 'application/json'  
      },
      body:veiculoJSON
  })
  .then(resp=>console.log(resp))


    



});
