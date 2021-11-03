fetch('https://innovations.kh.ua/quiz/?author_id=1').then(response => response.json())
    .then(function (ttt) {
        console.log(ttt);
    })
