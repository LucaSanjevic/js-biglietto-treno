var km = parseInt(prompt('Quanti km vuoi percorrere?'));
        var anni = parseInt(prompt('Quanti anni hai?'));
        var priceatkm = 0.21;
        var price = priceatkm * km;
        if(Number.isNaN(anni) || Number.isNaN(priceatkm)) {
            price = "Non hai inserito correttamente un numero"
        }
        if(anni < 18) {
            price = (price/100)*80;
            var price = price.toFixed(2);
        }
        else if (anni > 65) {
            price = (price/100)*60;
            var price = price.toFixed(2);
        }
        document.getElementById("stringa").innerHTML = price;