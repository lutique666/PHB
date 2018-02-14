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
var table_of_contents = '<a href="">Введение</a><i>Часть 1: Создание Персонажа</i><a href="">Глава 1: Создание Персонажа</a><a href="">Глава 2: Расы</a><a href="">Глава 3: Классы</a><a href="">Глава 4: Личность и Предыстория</a><a href="">Глава 5: Снаряжение</a><a href="">Глава 6: Индивидуальные Опции</a><a href="">Глава 7: Использование Характеристик</a> <i>Часть 2: Играя в Игру</i><a href="">Глава 8: Приключения</a><a href="">Глава 9: Сражение</a> <i>Часть 3: Правила Магии</i><a href="">Глава 10: Использование Заклинаний</a><a href="">Глава 11: Заклинания</a><a href="chapter11new.html">Глава 11: Заклинания из различных дополнений (тест)</a><a href="">Глава 11: Поиск по Заклинаниям</a><i>Приложения</i><a href="">Приложение A: Состояния</a><a href="">Приложение Б: Боги Мультивселенной</a><a href="">Приложение В: Планы Существования</a><a href="">Приложение Г: Параметры Существ</a>'


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





