var dragon_lvl = 6;
var str_mod = 5
var mastery = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];
var breathdamage = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8];
var bitedamage = [8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8];
var clawdamage = [4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10];
var advantage = false;
var disadvantage = false;
var result_d
var result_a
var dice_to_roll
var result = 0;
var result_string_dmg ='';
var i_adv =0;

	//Переменная для количества рольнутых дайсов после суммы
	var dice_rolled = '';
	//Суммарный результат ролла
	var result = 0;
	//Результирующая строка, которая добавляется в лог
	var result_string='';
	var result_string_dmg = '';
function attack(type)
{


console.log(type)
	//определяем тип атаки для рассчета урона
	if (type=='bite')
	{
		dice = bitedamage[dragon_lvl-1];
		dice_to_roll=1
		if (dragon_lvl > 10)
		{
			dice_to_roll=2
		}

	}
	else
	{
		dice_to_roll=1
		dice = clawdamage[dragon_lvl-1];
	}

	//Переменная для количества рольнутых дайсов после суммы
	var dice_rolled = '';
	//Суммарный результат ролла
	var result = 0;
	//Результирующая строка, которая добавляется в лог
	var result_string='';
	var result_string_dmg = '';
	//атака
	if (advantage==true || disadvantage==true)
	{
		single_roll1a = Math.floor((Math.random() * 20) + 1);
		single_roll2a = Math.floor((Math.random() * 20) + 1);
		//преимущество
		if (advantage==true)
			{
				if (single_roll1a>=single_roll2a)
				{
					result_a = single_roll1a;
				}
				else
				{
					result_a = single_roll2a;
				}
			}
		//помеха
		else
			{
				if (single_roll1a<=single_roll2a)
				{
					result_a = single_roll1a;
				}
				else
				{
					result_a = single_roll2a;
				}
			}
	console.log(single_roll1a, single_roll2a)
	}
	else
	{
 		single_rolla = Math.floor((Math.random() * 20) + 1);
 		result_a = single_rolla
	}

//Определяем не крит ли
	if (result_a>=19)
	{
		crit=2
	}
	else
	{
		crit=1
	}
//Дайс ту ролл определяется в атаке, при крите количество удавивается
	for (j=0; j<dice_to_roll*crit; j++) 
       	{
       		single_roll = Math.floor((Math.random() * dice) + 1);
       		console.log(single_roll)	
       		result += single_roll	
	   		result_string_dmg += single_roll.toString()+'[d'+ dice +'] '+', ';
	   	}
	console.log('Урона:', result)
	console.log(result_string)
	//Результат атаки
	result_a= result_a+str_mod+mastery[dragon_lvl-1];
	//Результат урона
	result=result+str_mod;
	if (advantage==true || disadvantage==true)
	{
  	result_string += 'Атака ' + '<span style="color:orange">' + result_a  + ' </span>(' + single_roll1a + ', ' + single_roll2a + ') в КЛАСС БРОНИ. Урон: <span style="color:orange">' + result + '. </span>Кубы: ' + result_string_dmg 
  	// +  '<span style="color:red">[' + dice_to_roll*crit + 'd' + dice + ']';
    }
    else
    {
    result_string += 'Атака ' + '<span style="color:orange">' + result_a  + ' </span>(' + single_rolla + ') в КЛАСС БРОНИ. Урон: <span style="color:orange">' + result + '. </span>Кубы: ' + result_string_dmg 	
    }
    if (crit == 2)
    {
    	result_string = '<span style="color:red">И это КРИТ! Потому что Я ДРАКОН!!!111</span>' + result_string
    }
  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;
}

function athletic()
{
result_string ='';
single_rolla = 0;
single_rolla = Math.floor((Math.random() * 20) + 1);
result_a = single_rolla+str_mod+mastery[dragon_lvl-1]
result_string += 'Проверка атлетики ' + '<span style="color:orange">' + result_a  + ' </span>(' + single_rolla + ').'
  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;
}

function something()
{
result_string ='';
single_rolla = 0;
single_rolla = Math.floor((Math.random() * 20) + 1);
result_string += 'Проверка какого-то дерьма, модификтор которого надо смотреть на листе' + '<span style="color:orange"> ' + single_rolla  + ' </span>(' + single_rolla + ').'
  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;
}

function adv()
{
console.log(i_adv)
	if (i_adv==0)
	{
		advantage=true;
		disadvantage=false;
		document.getElementById('adv').innerHTML = 'У меня <span style="color:orange">преимущество на атаку.'
		
	}
	else if (i_adv==1)
	{
		advantage=false;
		disadvantage=true;
		document.getElementById('adv').innerHTML = 'У меня <span style="color:orange">помеха на атаку.'
		
	}
	else if (i_adv==2)
	{
 		advantage=false;
		disadvantage=false;
		document.getElementById('adv').innerHTML = 'У меня <span style="color:orange">нет преимущества на атаку.'
		i_adv=-1
	}

i_adv+=1
}

function eraseLog() {
document.getElementById('result').innerHTML ='';
}