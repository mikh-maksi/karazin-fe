let title_arr = [ "Год основания Харьковского Университета","День рождения" ]
let question_arr = ["В каком году основан Харьковский университет?","Когда день рождения В.Н. Каразина?"]
let a1_arr = ["1804","09.02"]
let a2_arr = ["1805","10.02"]
let a3_arr = ["1933","02.09"]
let a4_arr = ["1993","09.10"]
let answer_arr = ["1804","10.02"]
let n_right_answer_arr=[1,2]

answers(n_question.value);

btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);

  function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    console.log(y4.checked);

    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    console.log(n_a);

    if (n_a == n_right_answer){
      right_div.classList.remove("hidden");
      wrong_div.classList.add("hidden");
    }else{
      right_div.classList.add("hidden");
      wrong_div.classList.remove("hidden");
    }
   
    
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    answers(k);
  }

function answers(k){
  n_question.value = k;

  title.innerHTML=title_arr[n_question.value];
  question.innerHTML=question_arr[n_question.value];
  a1.innerHTML = a1_arr[n_question.value];
  a2.innerHTML = a2_arr[n_question.value];
  a3.innerHTML = a3_arr[n_question.value];
  a4.innerHTML = a4_arr[n_question.value];
  answer.innerHTML = answer_arr[n_question.value];
  
  n_right_answer = n_right_answer_arr[n_question.value];
}