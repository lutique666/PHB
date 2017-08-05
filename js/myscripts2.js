var level_number = '1';
var class_name = 'bard';
var spellname = document.getElementsByClassName('spellname');
var des = document.getElementsByClassName('circle0-des');
var suggestion;
var current_display_table; //Текущая отображаемая таблица спеллов
var current_display_class; //Текущий отображаемый класс
var current_display_spell; //Текущий отображаемый спелл
var current_display_level='1'; //Текущий отображаемый уровень

function pagename() {
var title = document.getElementsByTagName("title")[0].innerHTML;
document.getElementById('page-name').innerHTML = title;
current_display_table = document.getElementById(class_name+level_number);
current_display_spell = document.getElementsByClassName('spellname')[0];
current_display_class = document.getElementById('bard');
suggestion = document.getElementById('suggestion')
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


var y = document.getElementsByClassName('clean');
for (var j=0; j<y.length; j++){
y[j].style.display = 'block';

}


if (classus == 'paladin' || classus == 'ranger')
{
	document.getElementsByClassName('clean')[0].style.display = 'none';
  document.getElementsByClassName('clean')[6].style.display = 'none';
  document.getElementsByClassName('clean')[7].style.display = 'none';
  document.getElementsByClassName('clean')[8].style.display = 'none';
  document.getElementsByClassName('clean')[9].style.display = 'none';		
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

document.getElementsByClassName('clean')[current_display_level].style.backgroundColor = 'white';
current_display_level = Number(level_number)
document.getElementsByClassName('clean')[current_display_level].style.backgroundColor = 'orange';	
	
class_name=classus;
ChangeLevel(level_number);
Search('111111111');
ChangeTitle();
}



function ChangeLevel(levelus) {

level_number = (levelus.slice(levelus.length-1,levelus.length))
current_display_table.style.display = 'none';
current_display_table = document.getElementById(class_name+level_number)
current_display_table.style.display = 'block';

	
Search('111111111');
ChangeTitle();
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
}

function ChangeTitle() {
switch(class_name) {
  case 'bard':
  class_ru='Барда';
  break
  case 'wizard':
  class_ru='Волшебника';
  break
  case 'druid':
  class_ru='Друида';
  break
  case 'cleric':
  class_ru='Жреца';
  break
  case 'warlock':
  class_ru='Колдуна';
  break
  case 'paladin':
  class_ru='Паладина';
  break
  case 'ranger':
  class_ru='Следопыта';
  break
  case 'sorcerer':
  class_ru='Чародея';
  break
}
if (level_number == 0) {
  level_string = 'Заговоры';
}
else {
  level_string = level_number + ' Уровень';
}

var title = 'Глава 11: Заклинания' + ' ' + class_ru + ' ' + level_string;
document.getElementById('page-name').innerHTML = title;

}




