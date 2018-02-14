var level_number = '0';
var class_name = 'bard';
var spellname = document.getElementsByClassName('spellname');
var des = document.getElementsByClassName('featherlight-inner');
var suggestion;
var current_display_table; //Текущая отображаемая таблица спеллов
var current_display_class; //Текущий отображаемый класс
var current_display_spell; //Текущий отображаемый спелл
var current_display_level=1; //Текущий отображаемый уровень
var check = 0
var table_of_contents = '<a href="Chapter00.html">Введение</a><i>Часть 1: Создание Персонажа</i><a href="Chapter01.html">Глава 1: Создание Персонажа</a><a href="Chapter02.html">Глава 2: Расы</a><a href="Chapter03.html">Глава 3: Классы</a><a href="Chapter04.html">Глава 4: Личность и Предыстория</a><a href="Chapter05.html">Глава 5: Снаряжение</a><a href="Chapter06.html">Глава 6: Индивидуальные Опции</a><a href="Chapter07.html">Глава 7: Использование Характеристик</a> <i>Часть 2: Играя в Игру</i><a href="Chapter08.html">Глава 8: Приключения</a><a href="Chapter09.html">Глава 9: Сражение</a> <i>Часть 3: Правила Магии</i><a href="Chapter10.html">Глава 10: Использование Заклинаний</a><a href="Chapter11.html">Глава 11: Заклинания</a><a href="Chapter11test.html">Глава 11: Заклинания из различных дополнений (тест)</a><a href="Chapter11zen.html">Глава 11: Дизигн</a><a href="Chapter11search.html">Глава 11: Поиск по Заклинаниям</a><i>Приложения</i><a href="Attachment01.html">Приложение A: Состояния</a><a href="Attachment02.html">Приложение Б: Боги Мультивселенной</a><a href="Attachment03.html">Приложение В: Планы Существования</a><a href="Attachment04.html">Приложение Г: Параметры Существ</a><i>Разное</i><a href="pocket.html">Генератор краж носовых платков</a>'

/*ПОЖАЛУЙСТА ПОФИКСИТЕ ЭТО*/
function hidelight() {
    if (check != 1)
    {
    document.getElementById('lightbox').style.display='none'        
    }
    else
    {
        check = 0
    }
}


/*И ЭТО. Клик на диве идет сквозь элемент*/
function showlight() {
    check = 1
}


function openNav() {
	document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}





function pagename() {

current_display_table = document.getElementById(class_name+level_number+'Table');
current_display_spell = document.getElementsByClassName('spellname')[0];
current_display_class = document.getElementById('bard');
document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents

}





function Content(id) {
	if (suggestion.style.display == 'block')
    {
    	suggestion.style.display = 'none';
    }
    else
    {
    	suggestion.style.display = 'block';
    }

}

function ChangeClass(classus) {

current_display_class.style.backgroundColor = 'white';
current_display_class = document.getElementById(classus)
current_display_class.style.backgroundColor = 'orange';







if (classus == 'paladin' || classus == 'ranger')
{
  
  if (Number(level_number) > 5) 
        {
            level_number = '5';

        }
  else if (Number(level_number)==0) 
    {
      level_number = '1';
    }
}
else 
{

}


	
class_name=classus;
ChangeLevel(level_number);


}



function ChangeLevel(levelus) {

level_number = levelus
current_display_table.style.display = 'none';
current_display_table = document.getElementById(class_name+level_number+'Table')

current_display_table.style.display = 'block';

	
document.getElementsByClassName('circle')[current_display_level].style.backgroundColor = 'white';
document.getElementsByClassName('circle2')[current_display_level].style.backgroundColor = 'white';


current_display_level = Number(level_number)

if (class_name == 'paladin' || class_name == 'ranger')
{
    document.getElementById('long19').style.display='none';
    document.getElementById('shrt15').style.display='block';
    document.getElementsByClassName('circle2')[current_display_level].style.backgroundColor = 'orange';
}
else 
{
    document.getElementById('shrt15').style.display='none';
    document.getElementById('long19').style.display='block';
    document.getElementsByClassName('circle')[current_display_level].style.backgroundColor = 'orange';	
}


}




function Search(neadle) {

html=neadle;
if (html == undefined)
{
	html='4324326547658765';
}
else {
}

for (var i=0; i<spellname.length; i++) {

if (spellname[i].innerHTML.indexOf(html.toUpperCase()) == 0) {
des[i].style.display = 'block';
}
else {
des[i].style.display = 'none';
}
}

document.getElementById('lightbox').style.display='block'
}





