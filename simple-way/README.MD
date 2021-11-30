# Web-программирование
Курс предназначен для того, чтобы освоить элементы обучения для создания сайтов, освоив базу верстки сайтов, динамического изменения данных на сайте, работы бекенда и работы фреймворка react.js.  
В качестве практических заданий на данном курсе верстаются страницы сайтов, страницы с вычислениями, одностраничное приложение (one page application) в функционале которого реализованы тесты.  

В каждом блоке - описание выполнения задания (которое достаточно скопировать и запустить), а также усложняющие элементы (для выполнения которых необходимо вставить свой контент, изменить параметры или же реализовать продемонстрированную технологию в новых условиях).

## Рабочее место
Для того: чтобы писать Web-программы нам необходим редактор кода и программа, которая будет запускать эти программы (браузер).  
В качестве редактора кода мы будем использовать <a href = "https://code.visualstudio.com/download">Microsoft VS Code</a>, а в качестве браузера будем использовать <a href = "https://www.google.com/chrome/">Google Crome</a>.  
  
## Написание текста и его отображение в браузере

Для работы создайте папку **work** в корне одного из дисков (лучше на диске D, чтобы ограничения операционной системы не мешали работать).



1. Откройте созданную папку **work** в **MS VS Code**.  
<img src = "./img/vscode01.jpg">  
 
<img src = "./img/vscode02.png">  

2. Создадим файл **index.html** (с помощью кнопки **New File**)  
<img src = "./img/vscode04.jpg">  

3. В рабочем поле введите слово "Текст"
<img src = "./img/vscode07.png">  

4. Сохраните файл
<img src = "./img/vscode09.png">  

5. Откройте и запустите файл **index.html** в папке **work**.
<img src = "./img/vscode10.png">  

6. Вы увидите результат:
<img src = "./img/vscode11.png">  

В ближашее время мы будем вводить код в рабочее поле редактора MS VS Code, сохранять код и результат видеть в браузере (при каждом новом сохранении обновляя страницу).

## Первые теги
**Теги** (метки) - позволяют изменять начертание текста. Тег `<b>` делает текст полужирным, тег `<i>` - написанным курсивом, а тег `<u>` - подчеркнутым.  
Для того, чтобы тег изменил наертание текста он должен быть заключен между открывающимся (`<b>`) и закрывающимся ((`</b>`)) тегом.  
Напишите в рабочем поле редактора **MS VS Code** следующий текст:
 
```html
<b>Полужирный Текст</b> <i>Курсивный текст</i> <u>Подчеркнутый текст</u>
```

<img src = "./img/vscode12.jpg">   

Сохраните введенные теги и откройте файл index.html в браузере.  
<img src = "./img/vscode13.png">  

## Абзац, ссылка, картинка



## Структура HTML-документа

1. В рабочем поле введем символ **!**, а далее, после появления выпадающего окна, нажмите **enter**.
<img src = "./img/vscode05.png">  
<img src = "./img/vscode06.png">  

## Оформление текста(Новость)

|№|Альтернативные задания|Код|Скриншот|
|---|---|---|---|
|1|1. Создайте страницу с тегами i,b,img,p,a|<a href = "https://github.com/mikh-maksi/karazin-fe/tree/main/simple-way#html">Код страницы</a>|<img src = "img/html.jpg" width = 300>|

## HTML
```html
<h1>Объявлен стартовый состав сборной Украины на матч против Казахстана</h1>
<img src="./img/team.jpg" alt="">
<p>В <i>среду, 12 сентября</i>, в <b>Нур-Султане</b> на "<b>Астана Арене</b>" в рамках матча квалификации чемпионата мира-2022 
    в <b>Катаре</b> встретятся сборные <b>Казахстана</b> и <b>Украины</b>.</p>

<p>Стал известен стартовый состав сборной Украины:</p>

<p>Украина: Пятов, Миколенко, Мативенко, Забарный, Караваев, Соболь, Зинченко, Сидорчук, Ярмоленко, Буяльский, Яремчук.</p>

<p>ZN.UA проведет онлайн-трансляцию матча Казахстан - Украина.</p>

<p>Украина после трех игр отбора имеет в активе три очка, трижды сыграв вничью с Францией, Финляндией и Казахстаном. 
    Первая встреча команд в марте в Киеве завершилась со счетом 1:1.</p>

<p>Отметим, что этот поединок станет первым у руля сборной Украины для нового наставника команды Александра Петракова. 
    Начало встречи – в 17:00.</p>
<a href = "https://zn.ua/SPORT/objavlen-startovyj-sostav-sbornoj-ukrainy-na-match-protiv-kazakhstana.html">Взято с сайта Зеркало Недели</a>
```

## Вставка текста на GitHub Pages
Создание репозитария

1. Заходим на **github.com** (если не зарегистрированы - зарегистрироваться)
<img src = "img/image14.png">  
<img src = "img/image15.png">  

2. Создаем новый репозитарий
<img src = "img/image19.png">

3. Или используем существующий

<img src = "img/image02.png">

4. Нажимаем кнопку **"clone or download"**

<img src = "img/image03.png">

5. Создаем новую папку и в ней на пустом месте нажимаем правую клавиши мыши, выбираем **gitBush Here** (если программа не установлена - скачать: https://git-scm.com/download/ )

<img src = "img/image04.png">

6. В открывшемся окне пишем   и нажимаем комбинацию клавиш **Shift+INS**
  
<img src = "img/image12.png">  

Или нажимаем правой клавишей мыши после набранного Вводим команду **git push** (возможно - нужно будет указать логин и пароль к git hub) и выбираем "Вставить" (Paste)  

<img src = "img/image07.png">

7. Нажимаем **"Enter"**  

<img src = "img/image10.png">  

8. Теперь в нашей созданной папке появилась новая под папка с названием таким же как название репозитария (в нашем случае **newrepo**)  
<img src = "img/image17.png">  

9.  Заходим в папку, создаем сайт (файлы **index.html**, **style.css**, картинки, шрифты, др.)
<img src = "img/image09.png">  
<img src = "img/image11.png"> 

10. Создаем необходимые файлы  
<img src = "img/image06.png">  
<img src = "img/image05.png">  
11. Переходим в проводник и нажимаем правой клавишей на пустом месте и выбираем gitbush Here
<img src = "img/image01.png">  


В открывшимся окне пишем **git add .**  

<img src = "img/image16.png">  

12. Далее - вводим команду **git commit -m "first commit"**

<img src = "img/image13.png">  

13. Вводим команду git push (возможно - нужно будет указать логин и пароль к git hub)

<img src = "img/image08.png">  

## Тематический сайт (inline-blocks)
|№|Задание|Код|Скриншот|
|---|---|---|---|
|2|1. Создайте сайт, используя свойство display:inline-block|<a href = "https://github.com/mikh-maksi/karazin-fe/tree/main/simple-way#html">Код страницы</a>|<img src = "img/site.jpg" width = "300">|


### inline-block
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style2.css">
    <link href="https://fonts.googleapis.com/css?family=Bad+Script" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <header>
            <div class="logo"><img src="img/idea.png" alt="Логотип"></div>
            <div class="title">Наши идеи изменят мир</div>
        </header>
        <nav>
            <ul class = "list">
                <li><a href="https://www.google.com/">item1</a></li>
                <li><a href="index2.html">item2</a></li>
                <li><a href="https://karazin.ua/">item3</a></li>
                <li><a href="http://www.cyber.kharkov.ua/">item4</a></li>
                <li><a href="https://city.kharkov.ua/">item5</a></li>
                <li><a href="index6.html">item6</a></li>
            </ul>
        </nav>
        <main>
            <aside class="left">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam maxime amet, necessitatibus accusamus commodi minus itaque perferendis. Deleniti temporibus itaque sunt culpa eveniet quaerat possimus neque, qui placeat voluptas! Veritatis.
            </aside>
            <article class="right">
                <h2>Index 6</h2>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, aut tempore quo voluptatem consequuntur dolorum illo aspernatur qui rerum temporibus ullam ipsam libero officiis ipsa maiores corporis id consectetur. Cumque.
            </article>
        </main>
        <footer>Все права защищены</footer>

    </div>
</body>
</html>
```
```css
.logo{
    display: inline-block;
    vertical-align: middle;
    height: 128px;
}
.title{
    display: inline-block;
    vertical-align: middle;
    font-family: 'Bad Script', cursive;
    font-size: 36px;

}
.list{
    background: cyan;
    line-height: 25px;
}
.list li{
    list-style: none;
    display:inline-block;
    text-align:center;

}
.list li a{
    display:inline-block;
    width: 50px;
    text-decoration: none;
    border: 1px solid transparent;
    color:black;
}
.list li a:hover{
    text-decoration: underline;
    border: 1px solid;
}

.left{
    display: inline-block;
    width: 20%;
}
.right{
    vertical-align: top;
    display: inline-block;
    width: calc(80% - 4px);
}
footer{
    text-align: center;
    background: cyan;
}
```

## Flexfroggy
## Тематический сайт (flexbox)
## Калькулятор
## Резюме
## Ответ на 1 вопрос
## Ответ на несколько вопросов
## Ответ на несколько вопросов (используем объект)
## Получение для вопросов данных с сервера
## Наполнение БД (MySQL)
## Создание endpoint
## React.js
