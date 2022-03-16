 var listaFilmes = ["https://br.web.img3.acsta.net/pictures/19/04/03/18/23/2539612.jpg", 
                    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg",
                    "https://cinegarimpo.com.br/wp/content/uploads/2017/02/cinegarimpo.com.br-ate-o-ultimo-homem-hacksaw-ridge-ate-o-ultimo-homem.jpg"];
 
 var novosFilmes = document.getElementById('novosFilmes');
 for(var i = 0; i< listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">");
}

 function aicionaFilme()
 {
    var filme = document.getElementById('urlFilme').value;
     
     //validando o input
    if(filme == "")
    {
        alert('preencha o campo com algum valor')
    }
    else
    {

    if (filme.endsWith(".jpg") || filme.endsWith(".jpeg") || filme.endsWith(".png"))
    {
        listaFilmes.unshift(filme); //adicionando o filme novo na array
     
        var img = document.createElement("img"); //criar elemento img
     
        img.src = filme; //atribuindo a propriedade source da imagem 
     
        for(var i = 0; i< listaFilmes.length; i++)
        {
            document.getElementById("novosFilmes").appendChild(img); //adicionando imagem como filha de novosFilmes
        }
        return alert('Filme adicionado com sucesso!')
    }
    else
    {
        alert('erro com a imagem')
    }
    }
 }
 