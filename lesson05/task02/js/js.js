let questions = ['Питання 1','Питання 2','Питання 3']; //Ваші оцінки за екзамени в останню сесію.

let q_number = parseInt(n_q.value);

question.innerHTML = questions[q_number];
console.log(q_number);

next.addEventListener("click",next_function);

function next_function(){
    if (q_number<2){
        q_number += 1;
    }
    console.log(q_number);
    question.innerHTML = questions[q_number];
}

