var optionCell = document.getElementsByClassName('optionCell');
var info = document.getElementsByClassName('info');
var archetypeCell = document.getElementsByClassName('archetypeCell');
var class_main = document.getElementsByClassName('class_main');
var current_display_archetype = document.getElementsByClassName('archetype1');
var current_display_main = true;


function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}

function pageload() {
document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents;
optionCell[2].style.backgroundColor = 'orange';
info[2].style.display = 'block';
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

if (button == 'Только подклассы')
{
  archetypeCell[archetypeCell.length-1].innerHTML='Показать полный список умений'
 for (i = 0; i < class_main.length; i++) {
  class_main[i].style.display='none';
  }
}

else
{
  archetypeCell[archetypeCell.length-1].innerHTML='Только подклассы'
  for (i = 0; i < class_main.length; i++) {
    class_main[i].style.display='block';
  }
}

}