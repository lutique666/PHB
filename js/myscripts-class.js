var optionCell = document.getElementsByClassName('optionCell');
var info = document.getElementsByClassName('info');
var archetypeCell = document.getElementsByClassName('archetypeCell');
var class_main = document.getElementsByClassName('class_main');
var current_display_archetype = document.getElementsByClassName('archetype1');
var current_display_main = true;

var table_of_contents = '<a href="Chapter00.html">Введение</a><i>Часть 1: Создание Персонажа</i><a href="Chapter01.html">Глава 1: Создание Персонажа</a><a href="Chapter02.html">Глава 2: Расы</a><a href="Chapter03.html">Глава 3: Классы</a><a href="Chapter04.html">Глава 4: Личность и Предыстория</a><a href="Chapter05.html">Глава 5: Снаряжение</a><a href="Chapter06.html">Глава 6: Индивидуальные Опции</a><a href="Chapter07.html">Глава 7: Использование Характеристик</a> <i>Часть 2: Играя в Игру</i><a href="Chapter08.html">Глава 8: Приключения</a><a href="Chapter09.html">Глава 9: Сражение</a> <i>Часть 3: Правила Магии</i><a href="Chapter10.html">Глава 10: Использование Заклинаний</a><a href="Chapter11gen.html">Глава 11: Заклинания</a><i>Приложения</i><a href="Attachment01.html">Приложение A: Состояния</a><a href="Attachment02.html">Приложение Б: Боги Мультивселенной</a><a href="Attachment03.html">Приложение В: Планы Существования</a><a href="Attachment04.html">Приложение Г: Параметры Существ</a><i>Разное</i><a href="pocket.html">Генератор краж носовых платков</a>'

function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}


function pageload() {
document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents;
}

//Верхний переключатель быстрое создание, описание, классовые умения
function ChangeDisplay(button) {
for (i = 0; i < optionCell.length; i++) {
optionCell[i].style.backgroundColor = 'white';
info[i].style.display = 'none';
}
optionCell[button.id].style.backgroundColor = 'orange';
info[button.id].style.display = 'block';
}

//Архетипы. Рядом кнопка того же стиля, поэтому длина массива -2.
function ChangeArchetype(button) {

if (current_display_archetype != undefined) {
for (i = 0; i < current_display_archetype.length; i++) {
  current_display_archetype[i].style.display = 'none'
  }
}

for (i = 0; i < archetypeCell.length-1; i++) {
  {
    if (archetypeCell[i].innerHTML==button)
      {
        archetypeCell[i].style.backgroundColor = 'orange';
        current_display_archetype= document.getElementsByClassName('archetype'+i);

      }
    else
    {
        archetypeCell[i].style.backgroundColor = 'white';
    }
  }
}

//Функция на эту отдельную кнопку. Показ только инфы об архетипах, показ показ полного списка способностей.
for (i = 0; i < current_display_archetype.length; i++) {
  current_display_archetype[i].style.display = 'block';
}
}

function ChangeDisplayMain(button)
{

if (button == 'Показать только архетипы')
{
  archetypeCell[archetypeCell.length-1].innerHTML='Показать полный список умений'
 for (i = 0; i < class_main.length; i++) {
  class_main[i].style.display='none';
  }
}

else
{
  archetypeCell[archetypeCell.length-1].innerHTML='Показать только архетипы'
  for (i = 0; i < class_main.length; i++) {
    class_main[i].style.display='block';
  }
}

}