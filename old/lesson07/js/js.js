let arr = [1,5,3,6,8,4,3];
let questions =["Сколько будет 2+2==4",""];
let answers = [["3","4","5","true"],["","","",""]]
let right_answers=[3,""]

question.innerHTML=questions[0];
label1.innerHTML =answers[0][0];
label2.innerHTML =answers[0][1]
label3.innerHTML =answers[0][2]
label4.innerHTML =answers[0][3]

btn.addEventListener("click",check);
function check(){
    n = document.getElementsByName("question");
    k=0;
    n.forEach(element => {
        if (element.checked){
            if (k == right_answers[0]){
                console.log("right");
            }
            else{
                console.log("wrong");
            }
        }
    k++;
    });

}

arr.forEach(element => {
    console.log(element);
});

// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
