send.addEventListener("click",fnc);
function fnc(){
    let val_deposit = deposit.value;
    let val_percent = percent.value;
    let val_term = term.value;
    let val_result = val_deposit;
    for (let i = 0; i<val_term; i++){
        val_result *= (1+val_percent/100)
    }
    result.innerHTML = val_result;

}