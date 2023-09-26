btn.addEventListener("click",fnc);


function fnc (){
    if ((login.value == 'admin') && (pass.value == 'pass')){
        alert("You login.");
    }
    else{
        alert("Login or password is not correct");
    }
    console.log(login.value);
    console.log(pass.value);
}