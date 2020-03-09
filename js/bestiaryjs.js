var table = '';
var named = true;
var cr = true;

function pageload()
{
	table += '<ul id="monsters" class="list">'
	for (i=0; i < monsterdata.length; i++)
	{
		table += '<li id="' + i + '" datalink="' + monsterdata[i].name + '">'
		if (named == true)
		{
			table += '<span class="name">' + monsterdata[i].name + '</span>'
		}

		if (cr == true)
		{
			table += '<span class="cr">' + monsterdata[i].cr + '</span>'
		}


	}
	table += '</li></ul>'

	document.getElementById('table').innerHTML = table
}

function openNav()
{

}


function closeNav()
{

}

function SearchString()
{

}