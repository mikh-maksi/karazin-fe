arr = ['question1','question2','question3'];
arr.forEach(callbackFn);


// function callbackFn(element){
//     console.log('l',element);
// }

// function callbackFn(element,index){
//     console.log(element,index);
// }

function callbackFn(element,index,array){
    if (index==0){
        console.log(array)
    }
    console.log(element,index);
}