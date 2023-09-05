send.addEventListener("click",fnc);
function fnc(){
    let val_a = a.value;
    let val_b = b.value;
    let val_c = 0
    if (act.value == '1' ){
        let val_c = parseInt(val_a) + parseInt(val_b);
    }
    if (act.value == '2' ){
        let val_c = parseInt(val_a) - parseInt(val_b);
    }
    if (act.value == '3' ){
        let val_c = parseInt(val_a) * parseInt(val_b);
    }
    if (act.value == '4' ){
        let val_c = parseInt(val_a) / parseInt(val_b);
    }    
    cc.value = val_c;

}

