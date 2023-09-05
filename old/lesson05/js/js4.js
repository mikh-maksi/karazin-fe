btn.addEventListener("click",fnc);
function fnc(){
    a = parseInt(digit.value);
    console.log(a);
    if (a%2==0){
        result.innerHTML = a+" Кратно 2";
    }
    else{
        result.innerHTML = a+" Не Кратно2";
    }

}
