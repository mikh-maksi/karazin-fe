const data = [
    [
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

    ],
    [
        { image: '3dmodelling.webp', text: 'Дизайн' },
        { image: 'design.jpeg', text: 'Программирование' },
        { image: 'programming.jpeg', text: '3Д-моделирование' },
        { image: 'background.jpeg', text: 'Программировали ли?' }

    ],

    [
        { image: 'design.jpeg', text: 'Дизайн' },
        { image: 'disneyjr.jpeg', text: 'Дизайн junior' },
        { image: 'fe.jpeg', text: 'Создание сайтов' },
        { image: 'fejr.jpeg', text: 'Создание сайтов junior' },
        { image: 'scratch.png', text: 'Программирвоание и графика на Scratch' },
        { image: 'minecraft.jpeg', text: 'Программирование во вселенной Minecraft' },
        { image: 'roblox2.jpeg', text: 'Создание игр на Roblox' },
        { image: 'gamedev.jpeg', text: 'Создание игр на C# и Unity' },
        { image: 'python.jpeg', text: 'Программирование на Python' },
    ],
    [
        { image: 'design.jpeg', text: 'Дизайн' },
        { image: 'programming.jpeg', text: 'Программирование' },
        { image: '3dmodelling.webp', text: '3Д-моделирование' }
    ]
]

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
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0]
    ]
];

console.log(data[0][0].image);

var answers = [];

function elem_out(n) {
    if (n < data.length) {
        elements.innerHTML = "";
        let i = n;

        console.log("answers[n - 1] = " + answers[n - 1]);
        if (answers[n - 1])
            console.log(check[0][answers[n - 1]][0]);
        for (let j = 0; j < data[i].length; j++) {
            // console.log(n);
            // console.log("length-->" + answers.length);
            // console.log(j);
            if ((answers.length > 0) && (n < data.length - 1)) {
                console.log("n=" + n + " answers[n - 1]=" + answers[n - 1] + " j=" + j + "check = " + check[n][answers[n - 1]][j]);
                if (!check[n][answers[n - 1]][j]) {
                    console.log(data[n][j]);
                    continue;
                }
            }


            let el_d = document.createElement('div');
            el_d.classList = "d";
            let el_forpic = document.createElement('div');
            el_forpic.classList = "forpic";
            el_forpic.style = "width:" + parseInt(1100 / data[i].length) + "px";
            let el_p = document.createElement('p');
            el_p.innerHTML = data[i][j].text;
            let el_img = document.createElement('img');
            el_img.width = parseInt(1200 / data[i].length);
            el_img.src = "img/" + data[i][j].image;
            el_forpic.appendChild(el_img);
            el_d.appendChild(el_forpic);
            el_d.appendChild(el_p);
            el_d.addEventListener('click', function() { element_click(j) });
            elements.appendChild(el_d);
        }
    } else {
        answer_string = '';
        for (let i = 0; i < answers.length; i++) {
            answer_string += answers[i] + ' ';
        }
        console.log(answer_string);
        wrapper.innerHTML = "";
        let elem_elem = document.createElement('div');
        const newLocal = 'elements cntr';
        elem_elem.classList = newLocal;
        elem_elem.id = 'elements';
        let elem_img = document.createElement('img');
        elem_img.width = 300;
        elem_img.src = "img/win.png";
        elem_elem.appendChild(elem_img);
        let elem_p = document.createElement('p');
        elem_p.innerHTML = answer_string;
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