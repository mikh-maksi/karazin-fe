const data = [
    [
        { image: 'design.jpeg', text: 'Дизайн' },
        { image: 'programming.jpeg', text: 'Программирование' },
        { image: '3dmodelling.webp', text: '3Д-моделирование' }
    ],
    [
        { image: 'programming.jpeg', text: 'Дизайн' },
        { image: '3dmodelling.webp', text: 'Программирование' },
        { image: 'design.jpeg', text: '3Д-моделирование' }
    ],
    [
        { image: '3dmodelling.webp', text: 'Дизайн' },
        { image: 'design.jpeg', text: 'Программирование' },
        { image: 'programming.jpeg', text: '3Д-моделирование' }
    ],
    [
        { image: 'design.jpeg', text: 'Дизайн' },
        { image: 'programming.jpeg', text: 'Программирование' },
        { image: '3dmodelling.webp', text: '3Д-моделирование' }
    ]
]

console.log(data[0][0].image);

var answers = [];

function elem_out(n) {
    if (n < data.length) {
        elements.innerHTML = "";
        let i = n;
        for (let j = 0; j < data[i].length; j++) {
            let el_d = document.createElement('div');
            el_d.classList = "d";
            let el_forpic = document.createElement('div');
            el_forpic.classList = "forpic";
            let el_p = document.createElement('p');
            el_p.innerHTML = data[i][j].text;
            let el_img = document.createElement('img');
            el_img.width = 300;
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