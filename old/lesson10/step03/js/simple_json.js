fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(response => response.json())
    .then(function (ttt) {
        console.log(ttt);
        console.log(ttt[0]);
        console.log(ttt[0].buy+ ' '+ ttt[0].sale);



        buy.innerHTML=ttt[0].buy;
        sale.innerHTML = ttt[0].sale;

        
       // alert(ttt[0].ccy)
    })
