//Драконьи статы, которые идут в куки
var dragon_lvl = 6;
var str=20;
var con=16;
var dex=14;
var cha=8;

//Эти считаются при загрузке страницы
var str_mod;
var con_mod;
var dex_mod;
var cha_mod;
//Бонус мастерства
var drmastery
//Это мод для АЦ
var item_mod = 2;

//Это таблички для вычисления урона и бонуса мастерстваа в зависимости от лвла
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
//Отображаемый бонус мастерства
var i_adv =0;

//Переменная для хранения результатов ролла
var attackres =[];
//Переменная для хранения результатов урона
var dmg = [];
//Суммарный урон с 3-х атак (при 100% попадании)
var sum = 0;
//Предсказываемый урон при промахе менее 5
var prediction=0;
var dc;
var dc_fear;
var attacktype;
var ac = 0;
var hp = 0;
var cookie = [];
//Походу нахуй не нужна
var stored;

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
  json_str = getCookie('stored');
  if ((json_str == undefined) || (json_str == "")) {
  	
  } 
  else {
  
  			dragon_lvl = JSON.parse(json_str)[0];
  			str = JSON.parse(json_str)[1];
  			dex = JSON.parse(json_str)[2];
  			con = JSON.parse(json_str)[3];
  			cha = JSON.parse(json_str)[4];
  		}

lvl(0);

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
	
       		result += single_roll;
	   		result_string_dmg += single_roll.toString()+'[d'+ 10 +'] '+', ';
	   		
	   	}
	   	result_string += 'Я на него дышу на ' + '<span style="color:red"><b>' + result  + ' огнем.</b></span> Спасбросок:<span style="color:red"><b> ' +  dc + '(Ловкость)</b></span>. Кубы: ' + result_string_dmg 
	   	  	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;

}


function lvl(input) {

	if (input == '-')
	{
		dragon_lvl--;
	}
	else if (input == '+')
	{
		dragon_lvl++;
	}
	else if (input == '-str')
	{
		str--;
	}
	else if (input == '+str')
	{
		str++;
	}
	else if (input == '-dex')
	{
		dex--;
	}
	else if (input == '+dex')
	{
		dex++;
	}
	else if (input == '-con')
	{
		con--;
	}
	else if (input == '+con')
	{
		con++;
	}
 	else if (input == '+cha')
	{
		cha++;
	}
	 else if (input == '-cha')
	{
		cha--;
	}

	console.log(dragon_lvl)
str_mod = Math.floor((str-10)/2);
dex_mod = Math.floor((dex-10)/2);
con_mod = Math.floor((con-10)/2);
cha_mod = Math.floor((cha-10)/2);
	drmastery = mastery[dragon_lvl-1];
	hp = (10+con_mod) + (6+con_mod)*(dragon_lvl-1);
	ac = 10+con_mod+dex_mod+item_mod;
 	dc = 8 + con_mod + mastery[dragon_lvl-1];
 	dc_fear = 8 + cha_mod + mastery[dragon_lvl-1];
	document.getElementById('drstr').innerHTML =  str + '(+' + str_mod + ')';
	document.getElementById('drdex').innerHTML =  dex + '(+' + dex_mod + ')';
	document.getElementById('drcon').innerHTML =  con + '(+' + con_mod + ')';
	document.getElementById('drcha').innerHTML =  cha + '(' + cha_mod + ')';
	document.getElementById('drdc').innerHTML =  dc + '(Ловкость)';
	document.getElementById('drfear').innerHTML =  dc_fear + '(Мудрость)';
	document.getElementById('drglvl').innerHTML =  dragon_lvl;
	document.getElementById('drgmastery').innerHTML =  '+' + drmastery;
	document.getElementById('drghp').innerHTML =  hp;
	document.getElementById('drgac').innerHTML =  ac;
	if (dragon_lvl>=7)
	{
		document.getElementById('fear').style.display = 'block';
	}
	else
	{
		document.getElementById('fear').style.display = 'none';
	}
  cookie.length=0
  cookie.push(dragon_lvl, str, dex, con, cha)
  console.log(cookie)
  json_str = JSON.stringify(cookie);
  createCookie('stored', json_str, 365);

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
attackres.push(result_a)

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
	result_string += 'Атака ' + attacktype + ' промахнулась ' + '<span style="color:orange"><b>(' 
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
	attackres.length = 0;
	sum =0;
	prediction=0;
	attack('bite');
	attack('claw');
	attack('claw');
	console.log(attackres)
	for (i=0; i<dmg.length;i++)
	{
		sum += dmg[i];
		if (attackres[i] > 5)
		{
			prediction+=dmg[i];
		}
		else
		{

		}
	}
	if (sum != prediction)
	{
	result_string = 'Суммарный урон с 3-х атак <span style="color:red"><b>' + sum + '</b></span>. При бросках атаки 5(d20) или менее, суммарно урона:<span style="color:red"><b> ' + prediction + '</b></span>.'
	}
	else
	{
	result_string = 'Суммарный урон с 3-х атак <span style="color:red"><b>' + sum + '</b></span>.'	
	}
	document.getElementById('result').innerHTML = '<p color="#000000">' + result_string + '</p>\n' + document.getElementById('result').innerHTML;
	console.log(dmg);
	console.log(attackres)
	dmg.length = 0;
	attackres.length = 0;
}

function athletic() {
result_string ='';
single_rolla = 0;
single_rolla = Math.floor((Math.random() * 20) + 1);
result_a = single_rolla+str_mod+mastery[dragon_lvl-1]
result_string += 'Проверка <b>Атлетики</b> ' + '<span style="color:orange"><b>' + result_a  + ' </b></span>(' + single_rolla + ').'
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