console.log("It works!");
s_btn = document.getElementById("success_btn");
d_btn = document.getElementById("danger_btn");

// matrix_list = document.querySelector(".matrix input");
matrix_list = document.getElementsByClassName("form-control");
console.log(matrix_list);

s_btn.addEventListener("click",s_fnc);
d_btn.addEventListener("click",d_fnc);

function s_fnc(){

    sum = 0;
    ii=-1
    jj=0
    matrix_arr =[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    for(i=0;i<matrix_list.length;i+=1){
        if (i%4==0){
            ii +=1;
            jj = 0
        }
        console.log(matrix_list[i]);
        sum+=parseInt(matrix_list[i].value);
        matrix_arr[ii][jj]=parseInt(matrix_list[i].value);
        jj+=1;
    }  
    sum = 0
    for (i=0;i<matrix_arr.length;i+=1){
        for (j=0;j<matrix_arr[i].length;j+=1){
            if (i==j){
                sum+=matrix_arr[i][j];
            }
        
        }
    }


    console.log(sum);
    
    // Для матриці 3*3
    // Суму елементів на головній диагоналі
    // Суму елементів на побічній диагоналі
    // визначальник


    
}
function d_fnc(){
    alert("Danger");
}