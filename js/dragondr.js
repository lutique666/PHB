var dragon_lvl = 6;
var str_mod = 5;
var con_mod = 3;
var dex_mod = 2;
var item_mod = 2;
var mastery = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];
var breathdamage = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8];
var bitedamage = [8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8];
var clawdamage = [4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10];
var advantage = false;
var disadvantage = false;
var result_d;
var result_a;
var dice_to_roll;
var result = 0;
var result_string_dmg ='';
var i_adv =0;
var dmg = [];
var sum = 0;
var dc;
var attacktype;
var ac = 0;
var hp = 0;
	//Переменная для количества рольнутых дайсов после суммы
	var dice_rolled = '';
	//Суммарный результат ролла
	var result = 0;
	//Результирующая строка, которая добавляется в лог
	var result_string='';
	var result_string_dmg = '';


function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}

function pageload() {
 document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents;
}

function breath() {
	//Переменная для количества рольнутых дайсов после суммы
	var dice_rolled = '';
	//Суммарный результат ролла
	var result = 0;
	//Результирующая строка, которая добавляется в лог
	var result_string='';
	var result_string_dmg = '';	
	for (j=0; j<breathdamage[dragon_lvl-1]; j++) 
       	{
       		single_roll = Math.floor((Math.random() * 10) + 1);
	
       		result += single_roll	
	   		result_string_dmg += single_roll.toString()+'[d'+ 10 +'] '+', ';
	   		dc = 8 + con_mod + mastery[dragon_lvl-1]
	   	}
	   	result_string += 'Я на него дышу на ' + '<span style="color:red"><b>' + result  + '</b></span> огнем. Спасбросок: ' + dc + ' по <b>Ловкости.</b> Кубы: ' + result_string_dmg 
	   	  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;

}


function lvl(input) {

	if (input == '-')
	{
		dragon_lvl--;
	}
	else
	{
		dragon_lvl++;
	}
	console.log(dragon_lvl)

	hp = (10+con_mod) + (6+con_mod)*(dragon_lvl-1);
	ac = 10+con_mod+dex_mod+item_mod;

	document.getElementById('drglvl').innerHTML =  dragon_lvl
	document.getElementById('drghp').innerHTML =  hp
	document.getElementById('drgac').innerHTML =  ac

}

function attack(type) {



	//определяем тип атаки для рассчета урона
	if (type=='bite')
	{
		dice = bitedamage[dragon_lvl-1];
		dice_to_roll=1
		attacktype = 'Укусом'
		if (dragon_lvl > 10)
		{
			dice_to_roll=2
		}

	}
	else
	{
		attacktype = 'Когтем'
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
	else if (result_a==1)
	{
		crit = 0
	}
	else
	{
		crit=1
	}
//Дайс ту ролл определяется в атаке, при крите количество удавивается
if (crit>0) {
	for (j=0; j<dice_to_roll*crit; j++) 
       	{
       		single_roll = Math.floor((Math.random() * dice) + 1);
	
       		result += single_roll	
	   		result_string_dmg += single_roll.toString()+'[d'+ dice +'] '+', ';
	   	}


	//Результат атаки
	result_a= result_a+str_mod+mastery[dragon_lvl-1];
	//Результат урона
	result=result+str_mod;
	if (advantage==true || disadvantage==true)
	{
  	result_string += 'Атака ' + attacktype + '<span style="color:orange"><b> ' + result_a  + ' </b></span>(' + single_roll1a + ', ' + single_roll2a + ') в КЛАСС БРОНИ. Урон: <span style="color:orange"><b>' + result + '. </b></span>Кубы: ' + result_string_dmg 
  	// +  '<span style="color:red">[' + dice_to_roll*crit + 'd' + dice + ']';
    }
    else
    {
    result_string += 'Атака ' + attacktype + '<span style="color:orange"><b> ' + result_a  + ' </b></span>(' + single_rolla + ') в КЛАСС БРОНИ. Урон: <span style="color:orange"><b>' + result + '. </b></span>Кубы: ' + result_string_dmg 	
    }

    if (crit == 2)
    {
    	result_string = '<span style="color:red">И это КРИТ! Потому что Я ДРАКОН!!!111</span>' + result_string
    }


  	dmg.push(result);
}

else {
	result_string += 'Атака промахнулась ' + '<span style="color:orange"><b>(' 
		if (advantage==true || disadvantage==true) 
		{
				result_string += single_roll1a + ', ' + single_roll2a + '</b></span>) на кубах'
		}
		else
		{
				result_string += single_rolla + '</b></span>) на кубе'
		}
	dmg.push(0);
}

  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;

}

function fullattack() {
	dmg.length = 0;
	var sum =0;
	attack('bite');
	attack('claw');
	attack('claw');
	for (i=0; i<dmg.length;i++)
	{
		sum += dmg[i];
	}
	result_string = 'Суммарный урон с 3-х атак <span style="color:red"><b>' + sum + '</b></span>'
	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;
	console.log(dmg);
	dmg.length = 0;
}

function athletic() {
result_string ='';
single_rolla = 0;
single_rolla = Math.floor((Math.random() * 20) + 1);
result_a = single_rolla+str_mod+mastery[dragon_lvl-1]
result_string += 'Проверка атлетики ' + '<span style="color:orange"><b>' + result_a  + ' </b></span>(' + single_rolla + ').'
  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;
}

function something() {
result_string ='';
single_rolla = 0;
single_rolla = Math.floor((Math.random() * 20) + 1);
result_string += 'Проверка какого-то дерьма, модификтор которого надо смотреть на листе' + '<span style="color:orange"><b> ' + single_rolla  + ' <b></span>(' + single_rolla + ').'
  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;
}

function adv() {

	if (i_adv==0)
	{
		advantage=true;
		disadvantage=false;
		document.getElementById('adv').innerHTML = 'У меня <span style="color:orange">преимущество на атаку.</span>'
		
	}
	else if (i_adv==1)
	{
		advantage=false;
		disadvantage=true;
		document.getElementById('adv').innerHTML = 'У меня <span style="color:orange">помеха на атаку.</span>'
		
	}
	else if (i_adv==2)
	{
 		advantage=false;
		disadvantage=false;
		document.getElementById('adv').innerHTML = 'У меня <span style="color:orange">нет преимущества на атаку.</span>'
		i_adv=-1
	}

i_adv+=1
}

function eraseLog() {
document.getElementById('result').innerHTML ='';
}