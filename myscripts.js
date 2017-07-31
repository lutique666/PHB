var level_number = '1'
var class_name = 'bard'
var spellname = document.getElementsByClassName('spellname')
var des = document.getElementsByClassName('circle0-des');

function pagename() {
var title = document.getElementsByTagName("title")[0].innerHTML;
document.getElementById('page-name').innerHTML = title

}


function Description(Switch) {
	var x = document.getElementsByClassName(Switch.className);
	var y = document.getElementsByClassName(Switch.className+'-des');
	for (var i=0; i<x.length; i++){
     	if (x[i].innerHTML == Switch.innerHTML)
	{
	    y[i].style.display = 'block';
	    x[i].style.backgroundColor = 'orange';
	}
	else
	{
	    y[i].style.display = 'none';
	    x[i].style.backgroundColor = 'white';
	}
	}
}


function Content(id) {
	var x = document.getElementById('suggestion');
	if (x.style.display == 'block')
    {
    	x.style.display = 'none';
    }
    else
    {
    	x.style.display = 'block';
    }

}

function ChangeClass(classus) {


var x = document.getElementsByClassName('classes');
for (var i=0; i<x.length; i++){
	x[i].style.backgroundColor = 'white';
}

document.getElementById(classus).style.backgroundColor = 'orange';

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


class_name=classus;
ChangeLevel(level_number);
Search('111111111');
ChangeTitle();
}



function ChangeLevel(levelus) {
var y = document.getElementsByClassName('clean');
for (var j=0; j<y.length; j++){
y[j].style.backgroundColor = 'white';
}

level_number = (levelus.slice(levelus.length-1,levelus.length))
var x = document.getElementsByClassName('classspell');
for (var i=0; i<x.length; i++) {
x[i].style.display = 'none';
document.getElementsByClassName('clean')[level_number].style.backgroundColor='orange';
}
document.getElementById(class_name+level_number).style.display = 'block';
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
var new_string=des[i].innerHTML.replace(/<span style="background-color:yellow">/g, '');
des[i].innerHTML = new_string;



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




