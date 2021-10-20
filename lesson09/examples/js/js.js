function add(a,b){
    let c  = a +b
    return c
}

console.log(add(4,5))


function check_answer(arr,n,answer){
    let flag  = false;
    arr.forEach((element, index) => { 
        if (index == n){
            if (element == answer){
                flag = true;
            }
        }
     } )
    return flag;
}
answers_arr = [1,2,1,3,4]
console.log(check_answer(answers_arr,0,2));


function check_answer1(arr,n,answer){
    let flag = false;
    arr.forEach((element,index) =>{
        if (index == n){
            if (element == answer){
                flag = true;
            }
        }
    })
    return flag;
}

console.log(check_answer1(answers_arr,0,2))