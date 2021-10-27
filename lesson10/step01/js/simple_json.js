fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(response => response.json())
    .then(function (ttt) {
        console.log(ttt);
       // alert(ttt[0].ccy)
    })
