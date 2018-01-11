var des = document.getElementsByClassName('circle0-des');
var spellname = document.getElementsByClassName('spellname');

if(characterCode == 13)
{
   return false;
   SearchString();
}
else
{
    return true;
}

function pagename() {
var title = document.getElementsByTagName("title")[0].innerHTML;
document.getElementById('page-name').innerHTML = title;

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


function SearchString() {

var neadlestring = document.getElementById('neadlestring').value.toLowerCase();
console.log(neadlestring);

for (var i=0; i<des.length; i++) 
{
var new_string=des[i].innerHTML.replace(/<span style="background-color:yellow">/g, '');
replaceser = '<span style="background-color:yellow">'+neadlestring+'</span>';

var check=document.getElementById('searchall').checked;
console.log(check);

if (check === true) {
  if ((des[i].innerHTML.indexOf(neadlestring.toUpperCase()) >= 3) || (des[i].innerHTML.indexOf(neadlestring) >= 3)) {
    new_string=new_string.replace(new RegExp(neadlestring, 'g'), replaceser);
    new_string=new_string.replace(neadlestring.toUpperCase(), '<span style="background-color:yellow">'+neadlestring.toUpperCase()+'</span>');
    des[i].innerHTML=new_string;
    des[i].style.display = 'block';
  } 
  else {
    des[i].style.display = 'none';
  }
} 

else {
if (neadlestring.length == 0)
{
}
else {
  if ((spellname[i].innerHTML.indexOf(neadlestring.toUpperCase()) >= 0) || (spellname[i].innerHTML.indexOf(neadlestring) >= 0)) {
    des[i].style.display = 'block';
  } 
  else  {
    des[i].style.display = 'none';
  }
}
}
}
}
