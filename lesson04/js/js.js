
send.addEventListener("click",fnc);
function fnc(){
    let val_a = a.value;
    let val_b = b.value;
    
    let val_c = parseInt(val_a) + parseInt(val_b);
    
    cc.value = val_c;
}

