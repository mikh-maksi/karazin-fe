const data = [
    {header:"Сколько лет вашему ребенку?",
     question:[   
        { image: '7.jpeg', text: '7' },
        { image: '8.png', text: '8' },
        { image: '9.png', text: '9' },
        { image: '10.jpeg', text: '10' },
        { image: '11.jpeg', text: '11' },
        { image: '12.svg', text: '12' },
        { image: '13.jpeg', text: '13' },
        { image: '14.jpeg', text: '14' },
        { image: '15.jpeg', text: '15' },
        { image: '16.jpeg', text: '16' }

    ]
},
{header:"Что было бы интересно создавать?",
     question:
    [
        { image: 'tgbot.jpg', text: 'Телеграм ботов' },
        { image: 'sites.png', text: 'Сайты' },
        { image: 'design-web.jpg', text: 'Дизайнерские ИТ-решения' },
        { image: 'gamedev.jpeg', text: 'Игры' },
        { image: 'scratch-game.jpg', text: 'Игры Scratch' },
        { image: 'minecraft-building.jpg', text: 'Здания в Minecraft' },
        { image: 'up_build.gif', text: 'Здания и квесты в Minecraft' },
        
        { image: 'roblox.gif', text: 'Игры в Roblox' }

    ]
}
    ,
    {header:"Какие предметы в школе ребенку больше нравятся?",
     question:
    [
        { image: 'math.png', text: 'Математика' },
        { image: 'mova.jpg', text: 'Мова та література' },
        { image: 'lis.jpg', text: 'Людина і світ, фізкультура' },
        { image: 'malyuvannya.png', text: 'Малювання' },
        { image: 'natural_science.jpg', text: 'Физика, химия, биология, география' }
    ]
}
    ,
    {header:"Какая оценка у ребенка по математике",
     question:
    [
        { image: 'sevenplus.png', text: '7 та більше' },
        { image: 'nineplus.png', text: '9 та більше' }
        
    ]
}
]

// var courses = ["course_scratch.png","minecraft_building.jpg","course_minecraft.png","course_junior.png","roblox-studio.jpg","course_fe.png","course_da.png","course_gd.png","course_py.png"];

var courses = [{name:"Scratch",img:"course_scratch.png"},
{name:"Minecraft Building",img:"minecraft_building.jpg"},
{name:"Minecraft",img:"course_minecraft.png"},
{name:"Front End Junior",img:"course_junior.png"},
{name:"Roblox studio",img:"roblox-studio.jpg"},
{name:"FrontEnd",img:"course_fe.png"},
{name:"IT-Design",img:"course_da.png"},
{name:"GameDev",img:"course_gd.png"},
{name:"Python",img:"course_py.png"}];


// Список решений answers
// Массив допусков - если в решении на предыдущем шаге будет значение x, то можно вывести на экран значения элементов data на этом шаге
// Цикл
let check = [
    [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
    ],
    [
        [0, 0, 0, 0, 1,1],
        [0, 0, 0, 0, 1,1],
        [0, 1, 0, 0, 0,0,1],
        [0, 1, 0, 0, 0,0,1],
        [0, 1, 1, 0, 0,0,1,1],
        [0, 1, 1, 0,0,0,0,1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];

console.log(data[0].question[0].image);
console.log(data.length);

var answers = [];

function elem_out(n) {

    if (n < data.length) {

        elements.innerHTML = "";
        let i = n;

        console.log("answers[n - 1] = " + answers[n - 1]);
        if (answers[n - 1])
            console.log(check[0][answers[n - 1]][0]);
        let variants = document.createElement("div");
        variants.classList = "variants";
        
        let question_text = document.createElement("h2");
        question_text.innerText=data[i].header;
        elements.appendChild(question_text);

        for (let j = 0; j < data[i].question.length; j++) {
            console.log(j);
            // console.log("length-->" + answers.length);
            // console.log(j);
            if ((answers.length > 0) && (n < data.length - 1)) {
                console.log("n=" + n + " answers[n - 1]=" + answers[n - 1] + " j=" + j + "check = " + check[n][answers[n - 1]][j]);
                if (!check[n][answers[n - 1]][j]) {
                    console.log(data[n].question[j]);
                    continue;
                }
            }


            let el_d = document.createElement('div');
            el_d.classList = "d";
            let el_forpic = document.createElement('div');
            el_forpic.classList = "forpic";
            el_forpic.style = "width:" + parseInt(1100 / data[i].question.length) + "px";
            let el_p = document.createElement('p');
            el_p.innerHTML = data[i].question[j].text;
            let el_img = document.createElement('img');
            el_img.width = parseInt(1200 / data[i].question.length);
            el_img.src = "img/" + data[i].question[j].image;
            el_forpic.appendChild(el_img);
            el_d.appendChild(el_forpic);
            el_d.appendChild(el_p);
            el_d.addEventListener('click', function() { element_click(j) });

            variants.appendChild(el_d);
            
        }
        elements.appendChild(variants);
    } else {
        answer_string = '';
        for (let i = 0; i < answers.length; i++) {
            answer_string += answers[i] + ' ';
        }
        console.log(answer_string);
        let course_number = 1;
        if (answers[0] == 0 || answers[0] == 1){
            if (answers[1]==4)
                course_number = 0;
            if (answers[1]==5)
                course_number = 1;

        }
        if (answers[0] == 2 || answers[0] == 3 ){
            if (answers[1]==1)
                course_number = 3;
            if (answers[1]==6)
                course_number = 2;
        }
        if (answers[0] == 4 ){
            if (answers[1]==1)
                course_number = 3;
            if (answers[1]==2)
                course_number = 6;
            if (answers[1]==6)
                course_number = 2;
            if (answers[1]==7)
                course_number = 4;
        }
        if (answers[0] == 5 ){
            if (answers[1]==1)
                course_number = 5;
            if (answers[1]==2)
                course_number = 6;
            if (answers[1]==6)
                course_number = 2;
            if (answers[1]==7)
                course_number = 4;
        }
        if (answers[0] >= 6 ){
            if (answers[1]==0)
                course_number = 8;
            if (answers[1]==1)
                course_number = 5;
            if (answers[1]==2)
                course_number = 6;
            if (answers[1]==3)
                course_number = 7;
        }



        wrapper.innerHTML = "";
        let elem_elem = document.createElement('div');
        const newLocal = 'elements cntr';
        elem_elem.classList = newLocal;
        elem_elem.id = 'elements';
        let elem_img = document.createElement('img');
        elem_img.width = 300;
        elem_img.src = "img/"+courses[course_number].img;
        elem_elem.appendChild(elem_img);
        let elem_p = document.createElement('p');
        elem_p.innerHTML = "<h2>"+courses[course_number].name+"</h2><br>"+answer_string;
        elem_elem.appendChild(elem_p);
        wrapper.appendChild(elem_elem);
    }

}
elem_out(0);

const elem = document.getElementsByClassName("d");

function element_click(n) {
    answers.push(n);
    console.log(answers);
    let step = parseInt(res.innerText) + 1;
    res.innerText = step;
    elem_out(step)
}