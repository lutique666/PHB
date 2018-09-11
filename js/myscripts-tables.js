
var level_number = '0'; //Дефолтное значение
var class_name = 'bard'; //Дефолтное значение
var spellname = document.getElementsByClassName('spellname');
var des = document.getElementsByClassName('featherlight-inner');
var suggestion; //Бывшее оглавлене
var current_display_table; //Текущая отображаемая таблица спеллов
var current_display_class; //Текущий отображаемый класс
var current_display_spell; //Текущий отображаемый спелл
var current_display_level = 1; //Текущий отображаемый уровень
var check = 0; //Переменная для прокликивания
var found = []; //Массив для забивки того, что найдено и подсвечено поиском. И дальнейшего удаления спанов.
var content; //Переменная в которой собирается таблица спеллов из массивов ниже.
var spellsource = document.getElementsByClassName('source');
var draw_table = [];
var draw_table2 = [];
var source_class = document.getElementsByClassName('source');
//var sourcep_class = document.getElementsByClassName('sourcep')
var n; //Кол-во столбцов в таблице


//Для swipe
var startX;
var startY;
var endY;
var endY;  




var common0 = ['Опыт', 'Доспехи и щиты', 'Оружие', 'Требования к мультиклассированию', 'Черты'];
var bard0 = ['Сводная таблица - Бард', 'Коллегия Доблести', 'Коллегия Знаний'];
var barb0 = ['Сводная таблица - Варвар', 'Путь берсерка', 'Путь тотемного война'];
var fighter0 = ['Сводная таблица - Воин', 'Мастер боевых исскуств', 'Мистический рыцарь', 'Чемпион'];
var cleric0 = [];
var druid0 = [];
var paladin0 = [];
var ranger0 = [];
var sorcerer0 = [];
var warlock0 = ['Сводная таблица - Колдун', 'Покровитель - Архифея', 'Покровитель - Исчадие', 'Покровитель - Великий Древний', 'Таинственные воззвания'];
var wizard0 = [];

var source_check = [];
// only strings
//Переменная в которой будем искать уровень спелла
var h3 = document.getElementsByTagName('h3')
//Вспомогательная переменная для определение уровня спелла
var l

//объявленные переменные для куков
var arr0 = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var arr6 = [];
var arr7 = [];
var arr8 = [];
var arr9 = [];

var json_str = [];
//Сердечки
var favourite = document.getElementsByClassName('favourite');



//Загрузка страницы получение куков

var table_of_contents = '<a href="Chapter00.html">Введение</a><i>Часть 1: Создание Персонажа</i><a href="Chapter01.html">Глава 1: Создание Персонажа</a><a href="Chapter02.html">Глава 2: Расы</a><a href="Chapter03.html">Глава 3: Классы</a><a href="Chapter04.html">Глава 4: Личность и Предыстория</a><a href="Chapter05.html">Глава 5: Снаряжение</a><a href="Chapter06.html">Глава 6: Индивидуальные Опции</a><a href="Chapter07.html">Глава 7: Использование Характеристик</a> <i>Часть 2: Играя в Игру</i><a href="Chapter08.html">Глава 8: Приключения</a><a href="Chapter09.html">Глава 9: Сражение</a> <i>Часть 3: Правила Магии</i><a href="Chapter10.html">Глава 10: Использование Заклинаний</a><a href="Chapter11gen.html">Глава 11: Заклинания</a><i>Приложения</i><a href="Attachment01.html">Приложение A: Состояния</a><a href="Attachment02.html">Приложение Б: Боги Мультивселенной</a><a href="Attachment03.html">Приложение В: Планы Существования</a><a href="Attachment04.html">Приложение Г: Параметры Существ</a><i>Разное</i><a href="pocket.html">Генератор краж носовых платков</a>'

/*Перерисовка при смене ориентации*/
window.addEventListener("orientationchange", function() {
  ChangeClass(class_name);
}, false);


function addFavourite(heart) {

  //Запихиваем в избранное

  //Внутри тега h3 проставлены уровни спеллов и школы
  //Берем в иннерхтмле только первый символ
  //Это и будет уровнем.
  //Если 'З' / заговор - то уровень 0-й
  //eval('arr'+l) - эквивален одного из 10 имен массивов arr
  if ((h3[heart.id].innerHTML[0] == 'З') || (h3[heart.id].innerHTML[0] == 'з')) {
    var l = 0;
  } else {
    var l = h3[heart.id].innerHTML[0].toString();
  }


  //Проверяем какое сердце жмем. При пустом заполняем массив, при полном удаляем
  if (heart.src.match("img/heart.png")) {
    eval('arr' + l).push(spellname[heart.id].innerHTML);

    heart.src = 'img/heartfull.png'
    //Избранное
  } else {
    eval('arr' + l).splice([(eval('arr' + l).indexOf(spellname[heart.id].innerHTML))], 1)
    heart.src = 'img/heart.png'
  }

  json_str = JSON.stringify(eval('arr' + l));
  createCookie('favourite' + l, json_str, 30);


}


//Функция создания печенек
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

//Функция получения печенек
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}




/*ПОЖАЛУЙСТА ПОФИКСИТЕ ЭТО*/
/*Скрытие лайт бокса. */
function hidelight() {
    if (check != 1)
    {
    document.getElementById('lightbox').style.display='none'
    if (found.length > 0)
    	{
    		//for (var i=0; i<found.length; i++) {
    		//des[found[i]].innerHTML = des[found[i]].innerHTML.replace(/<span>/g, '');
			//}
    		found = [];
    	}

    }
    else
    {
        check = 0
    }
}


/*И ЭТО. Клик на диве идет сквозь элемент. Для закрытия по клику за пределом описания. При клике на описание, клик проходит сквозь див, но это кастыль это фиксит*/
function showlight() {
    check = 1
}



function openSearch() {
  document.getElementById("inputform").style.display = "block";
  document.getElementById("searchbook").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("searchform").style.display = "none";
  current_display_spell = "Nothing"
}

function openBook() {
  document.getElementById("inputform").style.display = "none";
  document.getElementById("searchbook").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("searchform").style.display = "block";
  document.getElementById("nothing").style.display = "none";
}

function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}

function openSet() {
  document.getElementById("settings").style.width = "100%";

}

function closeSet() {
  document.getElementById("settings").style.width = "0%";
  source_check = [];
  for (i = 0; i < source_class.length; i++) {
    if (source_class[i].checked) {
      source_check.push(source_class[i].value);
    }
  }
  json_str = JSON.stringify(source_check);
  createCookie('storedsource', json_str, 30);
  //localStorage['storedsource'] = source_check
  //for (i = 0; i < source_class.length; i++) {
  //  sourcep_class[i].checked = source_class[i].checked
  //}
  ChangeClass(class_name);
}

function pageload() {

  current_display_table = document.getElementById(class_name + level_number + 'Table');
  current_display_class = document.getElementById(class_name);
  document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents;

document.getElementById('shrt15').style.display='none';
document.getElementById('long19').style.display='none';


  //Чтение выделенных сурсов. При первом открытии или открытии локально будет пустым и забьется дефолтным ксанатаром и КИ
  json_str = getCookie('storedsource');
  if ((json_str == undefined) || (json_str == "")) {
    source_check = ["КИ", "РКпВ"]
  } else {
    source_check = JSON.parse(json_str)
  }


  //Вспоминалка источников, проставляет галочки в настройках
  for (i = 0; i < source_class.length; i++) {

    if (source_check.indexOf(source_class[i].value) >= 0) {
      source_class[i].checked = 1
    //  sourcep_class[i].checked = 1
    } else {
      source_class[i].checked = 0
    //  sourcep_class[i].checked = 0
    }

  }
  //Но посколько храним мы строку, а работаем дальше с массивом, давайте-ка обнулим строку нахуй и построем массив еще раз, чтобы было заебись.
  source_check = [];
  for (i = 0; i < source_class.length; i++) {
    if (source_class[i].checked) {
      source_check.push(source_class[i].value);
    }
  }



  //Получение массива из куков
  for (n = 0; n < 10; n++) {
    json_str = getCookie('favourite' + n);

//Проверка, что в куках что-то есть.
if (json_str != "")
{
    //Охуительный кастыль, потому что eval('arr'+n)=JSON.parse(json_str) не работает ни с равно, ни с конкатом
    if (n == 0) {
      arr0 = JSON.parse(json_str) || [];
    } else if (n == 1) {
      arr1 = JSON.parse(json_str) || [];
    } else if (n == 2) {
      arr2 = JSON.parse(json_str) || [];
    } else if (n == 3) {
      arr3 = JSON.parse(json_str) || [];
    } else if (n == 4) {
      arr4 = JSON.parse(json_str) || [];
    } else if (n == 5) {
      arr5 = JSON.parse(json_str) || [];
    } else if (n == 6) {
      arr6 = JSON.parse(json_str) || [];
    } else if (n == 7) {
      arr7 = JSON.parse(json_str) || [];
    } else if (n == 8) {
      arr8 = JSON.parse(json_str) || [];
    } else {
      arr9 = JSON.parse(json_str) || [];
    }
}


    //Проставляем сердечки. Просматриваем массив arr и ищем его в массиве спеллнеймов
    for (i = 0; i < eval('arr' + n).length; i++) {
      for (j = 0; j < spellname.length; j++) {
        if (eval('arr' + n)[i] == spellname[j].innerHTML) {
          favourite[j].src = 'img/heartfull.png'
        }
      }
    }
  }
  //




}


function mouseStart()
{

    var e = window.event;
    startX = e.clientX;
    startY = e.clientY;

}

function mouseEnd()
{
//Берем координаты при начале перетягивания
    var e = window.event;
    endX = e.clientX;
    endY = e.clientY;
//Вычисляем разницу, по которой будем определять куда тянули страницу
var diffX = startX - endX;
var diffY = startY - endY;


if ((Math.abs(diffX) > Math.abs(diffY)) && (Math.abs(diffX) >= 50) && current_display_spell != "Nothing")
{
	for (i=0; i < draw_table_swipe.length; i++) 
	{
			if (draw_table_swipe[i] == current_display_spell)
			{
				j = i
			}

	}
	if 	(diffX > 0)
		{
			
			if (j == draw_table_swipe.length-1)
			{
				j=0
			}
			else
			{
				j++
			}
			Search(draw_table_swipe[j]);


		}
	else if (diffX < 0)
		{
			if (j == 0)
			{
				j=draw_table_swipe.length-1
			}
			else
			{
				j--
			}
			Search(draw_table_swipe[j]);


		}
}
else
{
	
}


}


//Берем координаты при начале перетягивания
function touchStart()
{

    var e = window.event;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    console.log(startX)
    console.log(startY)

}

function touchEnd()
{
//Берем координаты при начале перетягивания
    var e = window.event;
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
//Вычисляем разницу, по которой будем определять куда тянули страницу
var diffX = startX - endX;
var diffY = startY - endY;


if ((Math.abs(diffX) > Math.abs(diffY)) && (Math.abs(diffX) >= 50) && current_display_spell != "Nothing")
{
	for (i=0; i < draw_table_swipe.length; i++) 
	{
			if (draw_table_swipe[i] == current_display_spell)
			{
				j = i
			}

	}
	if 	(diffX > 0)
		{
			
			if (j == draw_table_swipe.length-1)
			{
				j=0
			}
			else
			{
				j++
			}
			Search(draw_table_swipe[j]);


		}
	else if (diffX < 0)
		{
			if (j == 0)
			{
				j=draw_table_swipe.length-1
			}
			else
			{
				j--
			}
			Search(draw_table_swipe[j]);


		}
}
else if (diffY >= 50)
{
	preventDefault();
}


}

function Content(id) {
  if (suggestion.style.display == 'block') {
    suggestion.style.display = 'none';
  } else {
    suggestion.style.display = 'block';
  }

}

function ChangeClass(classus) {
  current_display_class.style.backgroundColor = 'white';
  current_display_class = document.getElementById(classus)




  class_name = classus;
  ChangeLevel(level_number);


}





function ChangeLevel(levelus) {
  current_display_class.style.backgroundColor = 'orange';
  level_number = levelus


  document.getElementsByClassName('circle')[current_display_level].style.backgroundColor = 'white';
  document.getElementsByClassName('circle2')[current_display_level].style.backgroundColor = 'white';


  current_display_level = Number(level_number)



  //console.log(eval(class_name+current_display_level))


  var content = '<div class="TableBody"><div class="TableRow">'
  draw_table_swipe = []
  draw_table = []
  draw_table2 = []
  for (i = 0; i < eval(class_name + current_display_level).length; i++) {

    for (j = 0; j < source_check.length; j++) {
        if (draw_table[draw_table.length - 1] != eval(class_name + current_display_level)[i]) {
          draw_table.push(eval(class_name + current_display_level)[i]);
          draw_table_swipe.push(eval(class_name + current_display_level)[i]);
        }
      }
    }

console.log(draw_table_swipe)
  /*if(window.screen.orientation.type==="portrait-primary" || window.screen.orientation.type==="portrait-secondary") {
  	var n=3
  }
  else {
  	var n=6
  } старый вариант */

  var port = window.matchMedia('(max-device-width : 1920px)');
  if (port.matches) {
    var n = 3
  } else {
    var n = 4
  }
  /*Ебанутая хуйня*/

  var rows = Math.floor(draw_table.length / n)
  var ostatok = draw_table.length % n
  for (i = 1; i <= ostatok; i++) {
    draw_table2.push(draw_table[(rows + 1) * i - 1]);
  }

  for (i = 0; i < draw_table2.length; i++) {
    draw_table.splice(draw_table.indexOf(draw_table2[i]), 1);
  }

  var k = 0
  var l = k
  for (i = 0; i < rows; i++) {

    for (j = 0; j < n; j++) {
      if (l < draw_table.length) {
        content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + draw_table[l] + '</div>';
        l = l + rows
      }

    }
    content += '</div><div class="TableRow">';
    k = k + 1
    var l = k
  }

  for (i = 0; i < draw_table2.length; i++) {
    content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + draw_table2[i] + '</div>';
  }

  content += '</div><div class="TableRow">';


  /*Ебанутая хуйня*/

  //Отрисовка по строкам.
  //for(i=0; i<draw_table.length; i++){
  //   if ((i+1) % n == 0) {
  //  		content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + draw_table[i] + '</div></div><div class="TableRow">';
  //  	}
  //  	else {
  //  		content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + draw_table[i] + '</div>';
  //  	}
  //}

  content += '</div></div>'

  document.getElementById('table').innerHTML = content
}




function Search(neadle) {

  html = neadle;
  if (html == undefined) {
    html = '4324326547658765';
  } else {}



  for (var i = 0; i < spellname.length; i++) {

    if (spellname[i].innerHTML.toUpperCase().indexOf(html.toUpperCase()) == 0) {
      des[i].style.display = 'block';
      current_display_spell = spellname[i].innerHTML

    } else {
      des[i].style.display = 'none';
    }
  }

  document.getElementById('lightbox').style.display = 'block'
}





function SearchString() {
  //found = 0

  document.getElementById('lightbox').style.display = 'block';

  var check = document.getElementById('searchall').checked;
  var neadlestring = document.getElementById('neadlestring').value.toLowerCase();

  //Для выполнения поиска, если поисковая строка пустая
  if (neadlestring.length == 0) {
    neadlestring = " ";
    var neadlestringex = " ";
  } else {
    var neadlestringex = neadlestring[0].substring(0, 1).toUpperCase() + neadlestring.slice(1)
  }




  var clvl = document.getElementById('clvl').value; //Выборка уровня в выпадающем списке
  var cschool1 = document.getElementById('cschool1').value; //Выборка школы1 в выпадающем списке
  var cschool2 = document.getElementById('cschool2').value; //Выборка школы2 в выпадающем списке
  var cname = document.getElementById('cname').value; //Выборка класса в выпадающем списке
  var ctime = document.getElementById('ctime').value; //Выборка времени каста в выпадающем списке
  var ccomp = document.getElementById('ccomp').value; //Выборка компонентов в выпадающем списке
  var cduration = document.getElementById('cduration').value; //Выборка компонентов в выпадающем списке


  //На случай если одна из школ пуста
  if ((cschool1 == "") && (cschool2 != "")) {
    cschool1 = cschool2
  } else if ((cschool2 == "") && (cschool1 != "")) {
    cschool2 = cschool1
  }


  //Концентрация (?)
  //Компоненты (?)
  //Дистанция (?) наверное нет
  //replaceser = '<span>'+neadlestring+'</span>';
  //replaceser2 = '<span>'+neadlestringex+'</span>';

  for (var i = 0; i < des.length; i++) {
    //new_string = des[i].innerHTML
    	var gacha = 0
    	for (var j=0; j<source_check.length; j++) {
    			if (spellname[i].innerHTML.indexOf(source_check[j]) >= 0)
    				{
    					var gacha = 1;
    				}
    	}
//gacha - переменная для проверки, что спелл взят из источника, отмеченного галочкой в настройках. Если в имени спелла есть "КИ" и "КИ" отмечен галочкой, то тогда спелл отображается.
    if (check === true) {

      if (cduration != "1") //спелл с концентрацией или мгновенный
      {
        if (((des[i].innerHTML.indexOf(neadlestring.toUpperCase()) >= 0) || (des[i].innerHTML.indexOf(neadlestring) >= 0) || (des[i].innerHTML.indexOf(neadlestringex) >= 0)) && (h3[i].innerHTML.indexOf(clvl) >= 0) && ((h3[i].innerHTML.indexOf(cschool1) >= 0) || (h3[i].innerHTML.indexOf(cschool2) >= 0)) && ((des[i].innerHTML.indexOf(ctime) <= des[i].innerHTML.indexOf('<b>Время') + 60) && des[i].innerHTML.indexOf(ctime) >= 0) && (des[i].innerHTML.indexOf(ccomp) >= 0) && (des[i].innerHTML.indexOf(cduration) >= 0) && (des[i].innerHTML.indexOf(cname) >= 0) && gacha == 1) {
          /*(des[i].innerHTML.indexOf(neadlestring.toUpperCase()) >= 0) || (des[i].innerHTML.indexOf(neadlestring) >= 0) || (des[i].innerHTML.indexOf(neadlestringex) >= 0)
          Основная поисковая строка, ищется по всем регистрам в полном тексте спелла des[i]
          */

          /*(des[i].innerHTML.indexOf(clvl) >=0)
          Ищем уровень спелла в h3 (Уровень спелла и школа)
          */

          /*((h3[i].innerHTML.indexOf(cschool1) >=0) || (h3[i].innerHTML.indexOf(cschool2) >=0))
          Одна или другая школа
          */

          /*((des[i].innerHTML.indexOf(ctime) <= des[i].innerHTML.indexOf('<b>Время')+60) && des[i].innerHTML.indexOf(ctime) >= 0)
          Добавлено чтобы выборка шла и со спеллов где время активации варьируется типа <p><b>Время накладывания:</b> 1 действие или 8 часов</p>
          */


          /*(des[i].innerHTML.indexOf(ccomp) >=0)
          (des[i].innerHTML.indexOf(cduration) >=0)
          (des[i].innerHTML.indexOf(cname) >=0)
          Выборка по компонентам, длительности, названию класса
          */

          //	var new_string=new_string.replace(new RegExp(neadlestring, 'g'), replaceser);
          //	var new_string=new_string.replace(new RegExp(neadlestringex, 'g'), replaceser2);
          //  var new_string=new_string.replace(neadlestring.toUpperCase(), '<span>'+neadlestring.toUpperCase()+'</span>');
          des[i].style.display = 'block';
          found.push(i)
        } else {
          des[i].style.display = 'none';
        }
      } else //Длительный спелл без концентрации || (des[i].innerHTML.indexOf('Мгновенная') < 0)
      {
        if (((des[i].innerHTML.indexOf(neadlestring.toUpperCase()) >= 0) || (des[i].innerHTML.indexOf(neadlestring) >= 0) || (des[i].innerHTML.indexOf(neadlestringex) >= 0)) && (h3[i].innerHTML.indexOf(clvl) >= 0) && ((h3[i].innerHTML.indexOf(cschool1) >= 0) || (h3[i].innerHTML.indexOf(cschool2) >= 0)) && ((des[i].innerHTML.indexOf(ctime) <= des[i].innerHTML.indexOf('<b>Время') + 60) && des[i].innerHTML.indexOf(ctime) >= 0) && (des[i].innerHTML.indexOf(ccomp) >= 0) && ((des[i].innerHTML.indexOf('Концентрация') < 0) && (des[i].innerHTML.indexOf('Мгновенная') < 0) || ((des[i].innerHTML.indexOf('Мгновенная или') >= 0))) && (des[i].innerHTML.indexOf(cname) >= 0) && gacha == 1) {
          //	var new_string=new_string.replace(new RegExp(neadlestring, 'g'), replaceser);
          //	var new_string=new_string.replace(new RegExp(neadlestringex, 'g'), replaceser2);
          //  var new_string=new_string.replace(neadlestring.toUpperCase(), '<span>'+neadlestring.toUpperCase()+'</span>');

          /*((des[i].innerHTML.indexOf('Концентрация') < 0) && (des[i].innerHTML.indexOf('Мгновенная') < 0) || ((des[i].innerHTML.indexOf('Мгновенная или') >= 0)))
          Отличие от выборки выше: при cduration = "1" выполняется именно он. Ищем спелл, где длительность либо без концентрации, либо доступна не мгновенная активация
          */

          des[i].style.display = 'block';
          found.push(i)
        } else {
          des[i].style.display = 'none';
        }

      }



      // 	des[i].innerHTML=new_string;
    } else {
      if (neadlestring.length == 0) {} else {
        if ((spellname[i].innerHTML.indexOf(neadlestring.toUpperCase()) >= 0) || (spellname[i].innerHTML.indexOf(neadlestring) >= 0)) {
          des[i].style.display = 'block';
          found.push(i)


        } else {
          des[i].style.display = 'none';
        }
      }
    }
  }


if (found.length == 0) {
   document.getElementById("nothing").style.display = "block";
} else {
   document.getElementById("nothing").style.display = "none";
}


}
