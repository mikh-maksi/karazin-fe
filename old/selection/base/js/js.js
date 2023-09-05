const elem = document.getElementsByClassName("d");
console.log(elem.length);
for (let i = 0; i < elem.length; i++) {
    console.log(elem[i])
    elem[i].addEventListener('click', function() { fnc(i) });
}

function fnc(n) {
    console.log(n);
    console.log(res.innerText);
    let step = parseInt(res.innerText) + 1;
    res.innerText = step;
}
// elem.forEach(function(element, index) {
//     console.log(element);
//     console.log(index);
// });