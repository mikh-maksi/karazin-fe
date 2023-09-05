fetch('http://innovations.kh.ua/quiz/').then(response => response.json())
    .then(function (ttt) {
        console.log(ttt);
    })
