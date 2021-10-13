arr = ['question1','question2','question3']
arr.forEach(element => console.log(element));

arr.forEach((element, index) => { 
    console.log(element,index)
 } )



 arr.forEach((element, index, array) => { 
    if (index==0){
        console.log(array)
    }
    console.log(element,index);

 } )