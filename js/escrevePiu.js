var campoPiu = document.querySelector("#post");
var contador = document.querySelector("#contador");
var campoPiuForm = document.querySelector("#form-post");

campoPiu.addEventListener("input" , function() {
    if(this.value.length > 140) {
        contador.classList.add("excessoChar");
        campoPiu.classList.add("fundoExcesso");
        campoPiuForm.classList.add("fundoExcesso");
    }else {
        contador.classList.remove("excessoChar");
        campoPiu.classList.remove("fundoExcesso");
        campoPiuForm.classList.remove("fundoExcesso");
    }
    contador.textContent = this.value.length + "/140";
})


var botaoPostar = document.querySelector("#botaoPostar");

botaoPostar.addEventListener("click", function(event){

    event.preventDefault();
    
    var form = document.querySelector("#form-post");
    
    var piu = obtemPiu(form);


    var erros = validaPiu(piu);
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        form.reset();
        return;
    }

    adicionaPiu(piu);

    var contaPius = document.querySelector(".contadorPius");
    var numero = parseInt(contaPius.textContent) + 1;
    contaPius.textContent = numero;

    form.reset();
    var mensagensErro = document.querySelector("#mensagemErro");
    mensagensErro.innerHTML = "";
});


function validaPiu(piu) {

    var erros = [];

    if(piu.message.length == 0) {
        erros.push("O piu não pode ser em branco");
    }
    if(piu.message.length > 140) {
        erros.push("O piu não pode ter mais de 140 caracteres")
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagemErro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("mensagemDeErro");
        ul.appendChild(li);
    });   
}

function obtemPiu(form) {
    var piu = {
        message: form.post.value,
        user: nomePrincipal.textContent,
        imgUrl: fotoUser.src
    }
    return piu;
} 

function adicionaPiu(piu) {
    var novoPiu = montaTr(piu);
    var tabela = document.querySelector("#corpo-feed");
    var primeiroPiu = tabela.querySelector("tr:first-child");
    tabela.insertBefore(novoPiu, primeiroPiu);
}

function montaTr(piu) {
    var piuTr = document.createElement("tr");
    piuTr.classList.add("tr-feed");
    piuTr.appendChild(montaTd( "td-feed", piu.message, piu.user, piu.imgUrl));

    return piuTr;
}

function montaTd(classe, piuFrase, name, fotoPerfil) {
    var td = document.createElement("td");
    td.classList.add(classe);

    var nome = document.createElement("h2");
    var nomeUser = document.querySelector("#nome-principal");
    nome.classList.add("nome-feed");
    nome.textContent= name;

    var frase = document.createElement("p");
    frase.classList.add("piu-feed");
    frase.textContent = piuFrase;

    var imagem = document.createElement("img");
    imagem.src = fotoPerfil;
    imagem.alt = "Foto do usuario"
    imagem.classList.add("foto-feed");

    var botaoFavoritar = document.createElement("button");
    botaoFavoritar.classList.add("favoritar");
    botaoFavoritar.classList.add("hover");
    botaoFavoritar.addEventListener("click", function() {
        var tabelaFav = document.querySelector("#tabela-fav");

        var nome = td.querySelector(".nome-feed");
        var piu = td.querySelector(".piu-feed");
        
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

    var estrela = document.createElement("i");
    estrela.classList.add("fas");
    estrela.classList.add("fa-star");


    var botaoCurtir = document.createElement("button");
    botaoCurtir.classList.add("curtir");
    botaoCurtir.classList.add("hover");
    botaoCurtir.addEventListener("click", function() {
        var contador = td.querySelector(".likes");
        var numero = parseInt(contador.textContent) + 1;
        contador.textContent = numero;
    });

    var thumbup = document.createElement("i");
    thumbup.classList.add("fa-thumbs-up");
    thumbup.classList.add("far");

    var likes = document.createElement("span");
    likes.classList.add("likes");
    likes.textContent = "0";

    var botaoApagar = document.createElement("button");
    botaoApagar.classList.add("icon-apagar");
    botaoApagar.addEventListener("click", function() {
        td.classList.add("fadeOut"); 
        setTimeout(function() {
            td.remove();
        }, 500);

    });

    var apagar = document.createElement("i");
    apagar.classList.add("fas");
    apagar.classList.add("fa-times");
    
    
    td.appendChild(imagem);
    td.appendChild(nome);
    td.appendChild(frase);
    td.appendChild(likes);

    td.appendChild(botaoFavoritar);
    botaoFavoritar.appendChild(estrela);

    td.appendChild(botaoCurtir);
    botaoCurtir.appendChild(thumbup);

    td.appendChild(botaoApagar);
    botaoApagar.appendChild(apagar);
    
    return td;
}




