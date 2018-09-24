var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7 ");

    xhr.addEventListener("load", function() {
        if(xhr.status == 200) {
            var resposta = xhr.responseText;
            var piu = JSON.parse(resposta);
            //console.log(resposta);
            piu.forEach(function(piu) {
                //console.log(piu.user);
                adicionaPiu(piu);
            });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
        }
    });

    xhr.send();