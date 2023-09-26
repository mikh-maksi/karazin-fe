btn.addEventListener("click",fnc);
function fnc(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    console.log(a5.checked);
    if (a2.checked){
        alert("Right answer");
    } else {
        alert("Wrong answer");
    }
}