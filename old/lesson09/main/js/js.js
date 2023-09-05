let arr = [1,5,3,6,8,4,3];
let questions =["Сколько будет 2+2==4","2+5","4+3","3/3"];
let answers = [["3","4","5","true"],["1","2","7","9"],["1","2","7","9"],["1","2","7","9"]]
let right_answers=[3,2,2,0]
let answered = [0,0,0,0]

current_question = 0
total_points = 0;

function render(n_q){
    question.innerHTML=questions[n_q];
    label1.innerHTML =answers[n_q][0];
    label2.innerHTML =answers[n_q][1]
    label3.innerHTML =answers[n_q][2]
    label4.innerHTML =answers[n_q][3]
}

function next(){
    current_question++;

    if (current_question<questions.length){
        render(current_question);
    }else{
        questions_canvas.innerHTML = "Ваш результат: "+total_points+" баллов";
    }
    
    
    // if (current_question<questions.length){
    //     render(current_question);
    // } else{
    //     questions_canvas.innerHTML = 'Ваш результат:'+total_points;
    // }

}

function prev(){
    current_question--;
    render(current_question);
}


function check(){
    n = document.getElementsByName("question");
    k=0;
    if (answered[current_question]==0){

    n.forEach(element => {
        if (element.checked){
            if (k == right_answers[current_question]){
                alert("right");
                total_points++;
            }
            else{
                alert("wrong");
            }
        }
    k++;
    });
    }
    answered[current_question] = 1;
    console.log(total_points);
}


render(current_question);

btn.addEventListener("click",check);
btn_next.addEventListener("click",next);
btn_prev.addEventListener("click",prev);


arr.forEach(element => {
    console.log(element);
});

// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
