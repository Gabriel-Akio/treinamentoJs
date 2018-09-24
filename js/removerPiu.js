var tabela = document.querySelector("#corpo-feed");

var trs = tabela.querySelectorAll(".tr-feed");

trs.forEach(function(tr) {
    var botaoApagar = tr.querySelector(".icon-apagar");
    botaoApagar.addEventListener("click", function() {

        tr.classList.add("fadeOut"); 

        setTimeout(function() {
            tr.remove();
        }, 500);

    })
})

