console.log("It works!");
s_btn = document.getElementById("success_btn");
d_btn = document.getElementById("danger_btn");

s_btn.addEventListener("click",s_fnc);
d_btn.addEventListener("click",d_fnc);
function s_fnc(){
    alert("Success");
}
function d_fnc(){
    alert("Danger");
}