var creaturename;
var current_display_class
var class_name = 'spell0'
var spellname = document.getElementsByClassName('spellname');
var des = document.getElementsByClassName('featherlight-inner');
var check = 0; //Переменная для прокликивания
var found = [];
var spell0 = ['Зомби', 'Скелет']
var spell1 = ['Саблезубый тигр CR 2', 'Кетцалькоатль CR 2', 'Полярный медведь CR 2', 'Аллозавр CR 2']
var spell2 = ['Гуль', 'Вурдалак', 'Умертвие', 'Мумия']
var spell3 = ['Чвинга CR 0', 'Водный элементаль CR 5', 'Воздушный элементаль CR 5', 'Земляной элементаль CR 5', 'Огненный элементаль CR 5', 'Саламандра CR 5', 'Зорн CR 5']
var spell4 = ['Ворон CR 0', 'Кошка CR 0', 'Краб CR 0', 'Крыса CR 0', 'Летучая мышь CR 0', 'Лягушка CR 0', 'Морской конек CR 0', 'Осьминог CR 0', 'Паук CR 0', 'Рыба CR 0', 'Сова CR 0', 'Хорек CR 0', 'Ядовитая змея CR 1/8', 'Ястреб CR 0', 'Ящерица CR 0']
var spell5 = ['Летучая мышь CR 0', 'Паук CR 0', 'Сова CR 0', 'Крыса CR 0', 'Тресум CR 0', 'Летающая змея CR 1/8', 'Верблюд CR 1/8', 'Гигантская ездовая ящерица CR 1/4', 'Гигантский Паук-Волк CR 1/4', 'Гигантский крокодил CR 5', 'Гигантская акула CR 5', 'Мамонт CR 6', 'Гигантская обезьяна CR 7', 'Тираннозавр рекс CR 8']
var class_name = 'spell'



function pageload() {
  document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents;
  tmp = document.URL.split('#')
  spell_tmp1 = decodeURI(tmp[1])
  spell_tmp2 = document.getElementsByClassName('spellCell')
  for (i = 0; i < spell_tmp2.length; i++) {
    if (spell_tmp2[i].innerHTML.toUpperCase().indexOf(spell_tmp1.toUpperCase()) >= 0)
    {
     ChangeLevel(spell_tmp2[i].id) 
    }
  }


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

function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}



function ChangeLevel(levelus) {
current_display_level = levelus
  var content = '<div class="TableBody"><div class="TableRow">'
  draw_table_swipe = []
  draw_table = []
  draw_table2 = []
  for (i = 0; i < eval(class_name + current_display_level).length; i++) {
    draw_table.push(eval(class_name + current_display_level)[i]);
    draw_table_swipe.push(eval(class_name + current_display_level)[i]);
}
  
  


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

  //Отрисовка по строкам.
for(i=0; i<draw_table.length; i++){
   if ((i+1) % n == 0) {
		content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + draw_table[i] + '</div></div><div class="TableRow">';
  	}
  	else {
  		content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + draw_table[i] + '</div>';
  	}
}

  content += '</div></div>'

  document.getElementById('table').innerHTML = content
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




function Search(neadle) {	

   html = neadle;	
  if (html == 'undefined') {	
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



