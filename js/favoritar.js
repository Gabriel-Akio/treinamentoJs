var tabelaFav = document.querySelector("#tabela-fav");

var tabelaFeed = document.querySelector("#corpo-feed");

var linhas = tabelaFeed.querySelectorAll(".tr-feed");

linhas.forEach(function(linha) {
    var favoritar = linha.querySelector(".favoritar");
    var nome = linha.querySelector(".nome-feed");
    var piu = linha.querySelector(".piu-feed");
    favoritar.addEventListener("click", function() {
        var trFav = document.createElement("tr");
        var tdFav = document.createElement("td");
        var h2Fav = document.createElement("h2");
        var pFav = document.createElement("p");
        h2Fav.textContent = nome.textContent;
        pFav.textContent = piu.textContent;

        tdFav.appendChild(h2Fav);
        tdFav.appendChild(pFav);
        trFav.appendChild(tdFav);
        
        var primeiroFav = tabelaFav.querySelector("tr:first-child");
        tabelaFav.insertBefore(trFav, primeiroFav);  
    });
})


/*avoritar.forEach(function(estrela) {
    estrela.addEventListener("click", function() {
        var trFav = document.createElement("tr");
        var tdFav = document.createElement("td");
        var h2Fav = document.createElement("h2");
        var pFav = document.createElement("p");
    })
});*/