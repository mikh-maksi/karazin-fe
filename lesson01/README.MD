# Загальний опис HTML

**Теги структури:**

* **html** - тег, в якому міститься весь HTML-документ  
* **head** - тег, в якому знаходяться всі підключення та спеціальні теги.
* **body** - тег, в якому знаходиться тіло документа  

**Теги оформлення тексту:**
* **b** - напівжирний
* **i** - курсив
* **u** - підкреслений шрифт
* **ul** - нумерований список
* **ol** - ненумерований список
* **li** - пункт зі списку
* **p** - абзац
* **a** - посилання
* **img** - зображення
* **h1** - Заголовок першого рівня
* **h2** - Заголовок другого рівня
* **div** - тег блоку
* **span** - тег елемента рядка

## Верстка сторінки
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News</title>
</head>
<body>
    <h2>News Title</h2>
    <img src="./img/news.png" alt="" width=300>
    <p><i>News abstract</i></p>
    <p>News Text 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui cum odit fugiat facere iusto. Rem illum consectetur unde quod hic reprehenderit atque dolorem velit? Omnis nam dolor adipisci nulla!</p>
    <p>News Text 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui cum odit fugiat facere iusto. Rem illum consectetur unde quod hic reprehenderit atque dolorem velit? Omnis nam dolor adipisci nulla!</p>
    <p>News Text 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui cum odit fugiat facere iusto. Rem illum consectetur unde quod hic reprehenderit atque dolorem velit? Omnis nam dolor adipisci nulla!</p>
    <p><b>01.01.01</b> <a href = "http://google.com">Source</a></p>
</body>
</html>

```
## Завдання:
1. Взяти сторінку новин і згортати її, використовуючи базові теги.
2. Результат завантажити на GitHub
3. На GitHub активувати GitHub pages


## Семантичные теги
* **header** - вступительная часть документа
* **nav** - основная навигация
* **article** - независимая часть документа или сайта. Т.е. если переместить контент, который находится в article в другое место, то он не потеряет своей значимости.
* **section** - общий раздел документа (может быть частью статьи или другого блока)
* **main** основное содержание body - уникальное для страницы, исключая контент, который может повторяться на нескольких страницах, например, навигация. Т.е. то, что страницу делает уникальной страницей.
* **aside** - блок для сайдбара с содержанием, соответствующим странице, но имеющим меньшее значение
* **footer** - нижняя часть. footer может задаваться как всему документу, так и его отдельным частям.
