var tabela = document.querySelector("#corpo-feed");

var linhas = tabela.querySelectorAll(".tr-feed");

linhas.forEach(function(linha) {
    var likes = linha.querySelector(".curtir");
    var contador = linha.querySelector(".likes");

    likes.addEventListener("click", function() {
        var numero = parseInt(contador.textContent) + 1;
        contador.textContent = numero;
        
    })
})