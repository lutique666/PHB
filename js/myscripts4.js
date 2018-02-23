var level_number = '0'; //Дефолтное значение
var class_name = 'bard'; //Дефолтное значение
var spellname = document.getElementsByClassName('spellname');
var des = document.getElementsByClassName('featherlight-inner');
var suggestion;				//Бывшее оглавлене
var current_display_table; //Текущая отображаемая таблица спеллов
var current_display_class; //Текущий отображаемый класс
var current_display_spell; //Текущий отображаемый спелл
var current_display_level=1; //Текущий отображаемый уровень
var check = 0;	//Переменная для прокликивания
var found = []; //Массив для забивки того, что найдено и подсвечено поиском. И дальнейшего удаления спанов.
var content;	//Переменная в которой собирается таблица спеллов из массивов ниже.

var bard0=['Волшебная рука (КИ)', 'Дружба (КИ)', 'Защита от оружия (КИ)', 'Злая насмешка (КИ)', 'Малая иллюзия (КИ)', 'Меткий удар (КИ)', 'Пляшущие огоньки (КИ)', 'Починка (КИ)', 'Свет (КИ)', 'Сообщение (КИ)', 'Фокусы (КИ)', 'Раскат Грома (XGE)'];
var bard1=['Безмолвный образ (КИ)', 'Волна грома (КИ)', 'Героизм (КИ)', 'Диссонирующий шёпот (КИ)', 'Дружба с животными (КИ)', 'Жуткий смех Таши (КИ)', 'Лечащее слово (КИ)', 'Лечение ран (КИ)', 'Маскировка (КИ)', 'Невидимое письмо* (КИ)', 'Невидимый слуга* (КИ)', 'Обнаружение магии* (КИ)', 'Огонь фей (КИ)', 'Опознание* (КИ)', 'Очарование личности (КИ)', 'Падение пёрышком (КИ)', 'Понимание языков* (КИ)', 'Порча (КИ)', 'Разговор с животными* (КИ)', 'Скороход (КИ)', 'Усыпление (КИ)', 'Дрожь Земли (XGE)'];
var bard2=['Видение невидимого (КИ)', 'Внушение (КИ)', 'Волшебные уста* (КИ)', 'Воображаемая сила (КИ)', 'Глухота/слепота (КИ)', 'Дребезги (КИ)', 'Корона безумия (КИ)', 'Малое восстановление (КИ)', 'Невидимость (КИ)', 'Облако кинжалов (КИ)', 'Область истины (КИ)', 'Обнаружение мыслей (КИ)', 'Открывание (КИ)', 'Поиск животных или растений* (КИ)', 'Поиск предмета (КИ)', 'Почтовое животное* (КИ)', 'Раскалённый металл (КИ)', 'Речь златоуста (КИ)', 'Тишина* (КИ)', 'Удержание личности (КИ)', 'Улучшение характеристики (КИ)', 'Умиротворение (КИ)', 'Защитный Ветер (XGE)', 'Небесные Письмена* (XGE)', 'Пиротехника (XGE)']
var bard3=['Гипнотический узор (КИ)', 'Зловонное облако (КИ)', 'Леомундова хижина* (КИ)', 'Необнаружимость (КИ)', 'Образ (КИ)', 'Охранные руны (КИ)', 'Подсматривание (КИ)', 'Послание (КИ)', 'Притворная смерть* (КИ)', 'Проклятие (КИ)', 'Разговор с мёртвыми (КИ)', 'Разговор с растениями (КИ)', 'Рассеивание магии (КИ)', 'Рост растений (КИ)', 'Ужас (КИ)', 'Языки (КИ)', 'Дрёма (XGE)', 'Изобилие Врагов (XGE)']
var bard4=['Высшая невидимость (КИ)', 'Мираж (КИ)', 'Переносящая дверь (КИ)', 'Поиск существа (КИ)', 'Превращение (КИ)', 'Принуждение (КИ)', 'Свобода перемещения (КИ)', 'Смятение (КИ)', 'Очарование Монстра (XGE)']
var bard5=['Вещий сон (КИ)', 'Высшее восстановление (КИ)', 'Знание легенд (КИ)', 'Изменение памяти (КИ)', 'Круг телепортации (КИ)', 'Множественное лечение ран (КИ)', 'Наблюдение (КИ)', 'Обет (КИ)', 'Оживление (КИ)', 'Оживление вещей (КИ)', 'Планарные узы (КИ)', 'Подчинение личности (КИ)', 'Притворство (КИ)', 'Пробуждение разума (КИ)', 'Удержание чудовища (КИ)', 'Фальшивый двойник (КИ)', 'Синоптический Разряд (XGE)', 'Усиление Навыка (XGE)']
var bard6=['Заданная иллюзия (КИ)', 'Истинное зрение (КИ)', 'Поиск пути (КИ)', 'Множественное внушение (КИ)', 'Неудержимая пляска Отто (КИ)', 'Разящее око (КИ)', 'Стражи (КИ)']
var bard7=['Великолепный особняк Морденкайнена (КИ)', 'Воскрешение (КИ)', 'Знак (КИ)', 'Меч Морденкайнена (КИ)', 'Проекция (КИ)', 'Регенерация (КИ)', 'Таинственный мираж (КИ)', 'Телепортация (КИ)', 'Узилище (КИ)', 'Эфирность (КИ)']
var bard8=['Находчивость (КИ)', 'Подчинение чудовища (КИ)', 'Слабоумие (КИ)', 'Слово Силы: оглушение (КИ)', 'Сокрытие разума (КИ)']
var bard9=['Истинное Превращение (КИ)', 'Предвидение (КИ)', 'Слово Силы: исцеление (КИ)', 'Слово Силы: смерть (КИ)', 'Множественное Превращение (XGE)', 'Психический Крик (XGE)']
var cleric0=['Починка (КИ)', 'Свет (КИ)', 'Священное пламя (КИ)', 'Сопротивление (КИ)', 'Указание (КИ)', 'Уход за умирающим (КИ)', 'Чудотворство (КИ)', 'Погребальный Звон (XGE)', 'Слово Сияния (XGE)']
var cleric1=['Благословение (КИ)', 'Защита от добра и зла (КИ)', 'Лечащее слово (КИ)', 'Лечение ран (КИ)', 'Нанесение ран (КИ)', 'Направленный снаряд (КИ)', 'Обнаружение болезней и яда* (КИ)', 'Обнаружение добра и зла (КИ)', 'Обнаружение магии* (КИ)', 'Очищение пищи и питья* (КИ)', 'Порча (КИ)', 'Приказ (КИ)', 'Сотворение или уничтожение воды (КИ)', 'Убежище (КИ)', 'Щит веры (КИ)', 'Церемония* (XGE)']
var cleric2=['Божественное оружие (КИ)', 'Вечный огонь (КИ)', 'Гадание* (КИ)', 'Глухота/слепота (КИ)', 'Защита от яда (КИ)', 'Малое восстановление (КИ)', 'Молебен лечения (КИ)', 'Нетленные останки* (КИ)', 'Область истины (КИ)', 'Охраняющая связь (КИ)', 'Подмога (КИ)', 'Поиск ловушек (КИ)', 'Поиск предмета (КИ)', 'Тишина* (КИ)', 'Удержание личности (КИ)', 'Улучшение характеристики (КИ)', 'Умиротворение (КИ)']
var cleric3=['Возрождение (КИ)', 'Восставший труп (КИ)', 'Дневной свет (КИ)', 'Духовные стражи (КИ)', 'Защита от энергии (КИ)', 'Магический круг (КИ)', 'Маяк надежды (КИ)', 'Множественное лечащее слово (КИ)', 'Охранные руны (КИ)', 'Подсматривание (КИ)', 'Послание (КИ)', 'Притворная смерть* (КИ)', 'Проклятие (КИ)', 'Разговор с мёртвыми (КИ)', 'Рассеивание магии (КИ)', 'Слияние с камнем* (КИ)', 'Снятие проклятья (КИ)', 'Сотворение пищи и воды (КИ)', 'Хождение по воде* (КИ)', 'Языки (КИ)', 'Передача Жизни (XGE)']
var cleric4=['Власть над водами (КИ)', 'Защита от смерти (КИ)', 'Изгнание (КИ)', 'Изменение формы камня (КИ)', 'Поиск существа (КИ)', 'Предсказание* (КИ)', 'Свобода перемещения (КИ)', 'Страж веры (КИ)']
var cleric5=['Высшее восстановление (КИ)', 'Заражение (КИ)', 'Знание легенд (КИ)', 'Множественное лечение ран (КИ)', 'Наблюдение (КИ)', 'Нашествие насекомых (КИ)', 'Небесный огонь (КИ)', 'Обет (КИ)', 'Общение* (КИ)', 'Оживление (КИ)', 'Планарные узы (КИ)', 'Рассеивание добра и зла (КИ)', 'Святилище (КИ)', 'Рассвет (XGE)', 'Священное Оружие (XGE)']
var cleric6=['Запрет* (КИ)', 'Истинное зрение (КИ)', 'Пир героев (КИ)', 'Планарный союзник (КИ)', 'Поиск пути (КИ)', 'Полное исцеление (КИ)', 'Поражение (КИ)', 'Слово возврата (КИ)', 'Сотворение нежити (КИ)', 'Стена клинков (КИ)']
var cleric7=['Божественное слово (КИ)', 'Воскрешение (КИ)', 'Знак (КИ)', 'Огненная буря (КИ)', 'Призыв небожителя (КИ)', 'Регенерация (КИ)', 'Уход в иной мир (КИ)', 'Эфирность (КИ)', 'Храм Богов (XGE)']
var cleric8=['Аура святости (КИ)', 'Власть над погодой (КИ)', 'Землетрясение (КИ)', 'Преграда магии (КИ)']
var cleric9=['Врата (КИ)', 'Истинное воскрешение (КИ)', 'Множественное полное исцеление (КИ)', 'Проекция в астрал (КИ)']
var druid0=['Дубинка (КИ)', 'Искусство друидов (КИ)', 'Починка (КИ)', 'Сопротивление (КИ)', 'Сотворение пламени (КИ)', 'Терновый кнут (КИ)', 'Указание (КИ)', 'Ядовитые брызги (КИ)', 'Власть Над Огнём (XGE)', 'Волшебный Камень (XGE)', 'Лепка Земли (XGE)', 'Нашествие (XGE)', 'Первобытная Дикость (XGE)', 'Обморожение (XGE)', 'Раскат Грома (XGE)', 'Сотворение Костра (XGE)', 'Формование Воды (XGE)', 'Шквал (XGE)']
var druid1=['Волна грома (КИ)', 'Дружба с животными (КИ)', 'Лечащее слово (КИ)', 'Лечение ран (КИ)', 'Обнаружение болезней и яда* (КИ)', 'Обнаружение магии* (КИ)', 'Огонь фей (КИ)', 'Опутывание (КИ)', 'Очарование личности (КИ)', 'Очищение пищи и питья* (КИ)', 'Прыжок (КИ)', 'Разговор с животными* (КИ)', 'Скороход (КИ)', 'Сотворение или уничтожение воды (КИ)', 'Туманное облако (КИ)', 'Чудо-ягоды (КИ)', 'Дрожь Земли (XGE)', 'Звериные Узы (XGE)', 'Ледяной Кинжал (XGE)', 'Поглощение Стихий (XGE)', 'Силок (XGE)']
var druid2=['Бесследное передвижение (КИ)', 'Горящий клинок (КИ)', 'Дубовая кора (КИ)', 'Животные чувства* (КИ)', 'Защита от яда (КИ)', 'Лунный луч (КИ)', 'Малое восстановление (КИ)', 'Поиск животных или растений* (КИ)', 'Поиск ловушек (КИ)', 'Поиск предмета (КИ)', 'Порыв ветра (КИ)', 'Почтовое животное* (КИ)', 'Пылающий шар (КИ)', 'Раскалённый металл (КИ)', 'Тёмное зрение (КИ)', 'Удержание личности (КИ)', 'Улучшение характеристики (КИ)', 'Шипы (КИ)', 'Защитный Ветер (XGE)', 'Исцеляющий Дух (XGE)', 'Небесные Письмена* (XGE)', 'Пылевой Вихрь (XGE)', 'Узы Земли (XGE)']
var druid3=['Дневной свет (КИ)', 'Защита от энергии (КИ)', 'Метель (КИ)', 'Подводное дыхание* (КИ)', 'Призыв животных (КИ)', 'Призыв молнии (КИ)', 'Притворная смерть* (КИ)', 'Разговор с растениями (КИ)', 'Рассеивание магии (КИ)', 'Рост растений (КИ)', 'Слияние с камнем* (КИ)', 'Стена ветров (КИ)', 'Хождение по воде* (КИ)', 'Водяная Стена (XGE)', 'Извержение Земли (XGE)', 'Приливная Волна (XGE)', 'Пылающие Стрелы (XGE)']
var druid4=['Власть над водами (КИ)', 'Гигантское насекомое (КИ)', 'Град (КИ)', 'Изменение формы камня (КИ)', 'Каменная кожа (КИ)', 'Мираж (КИ)', 'Огненная стена (КИ)', 'Подчинение зверя (КИ)', 'Поиск существа (КИ)', 'Превращение (КИ)', 'Призыв лесных обитателей (КИ)', 'Призыв малых элементалей (КИ)', 'Свобода перемещения (КИ)', 'Смятение (КИ)', 'Усыхание (КИ)', 'Цепкая лоза (КИ)', 'Водяная Сфера (XGE)', 'Очарование Монстра (XGE)', 'Проклятье Стихий (XGE)', 'Страж Природы (XGE)']
var druid5=['Высшее восстановление (КИ)', 'Древесный путь (КИ)', 'Заражение (КИ)', 'Каменная стена (КИ)', 'Множественное лечение ран (КИ)', 'Наблюдение (КИ)', 'Нашествие насекомых (КИ)', 'Обет (КИ)', 'Общение с природой* (КИ)', 'Преграда жизни (КИ)', 'Призыв элементаля (КИ)', 'Пробуждение разума (КИ)', 'Планарные узы (КИ)', 'Реинкарнация (КИ)', 'Власть Над Ветрами (XGE)', 'Водоворот (XGE)', 'Гнев Природы (XGE)', 'Преобразование Камня (XGE)']
var druid6=['Движение почвы (КИ)', 'Пир героев (КИ)', 'Поиск пути (КИ)', 'Полное исцеление (КИ)', 'Призыв феи (КИ)', 'Путешествие через растения (КИ)', 'Солнечный луч (КИ)', 'Терновая стена (КИ)', 'Хождение по ветруКости Земли (XGE)', 'Облачение Ветра (XGE)', 'Облачение Камня (XGE)', 'Облачение Льда (XGE)', 'Облачение Огня (XGE)', 'Первородный Страж (XGE)', 'Роща Друида (XGE)']
var druid7=['Изменение тяготения (КИ)', 'Огненная буря (КИ)', 'Регенерация (КИ)', 'Таинственный мираж (КИ)', 'Уход в иной мир (КИ)', 'Смерч (XGE)']
var druid8=['Антипатия/симпатия (КИ)', 'Власть над погодой (КИ)', 'Землетрясение (КИ)', 'Превращение в животных (КИ)', 'Слабоумие (КИ)', 'Солнечный ожог (КИ)', 'Цунами (КИ)']
var druid9=['Гроза гнева (КИ)', 'Истинное воскрешение (КИ)', 'Полное Превращение (КИ)', 'Предвидение (КИ)']
var paladin1=['Благословение (КИ)', 'Божественное благоволение (КИ)', 'Вызов на дуэль (КИ)', 'Героизм (КИ)', 'Гневная кара (КИ)', 'Громовая кара (КИ)', 'Защита от добра и зла (КИ)', 'Лечение ран (КИ)', 'Обнаружение болезней и яда* (КИ)', 'Обнаружение добра и зла (КИ)', 'Обнаружение магии* (КИ)', 'Очищение пищи и питья* (КИ)', 'Палящая кара (КИ)', 'Приказ (КИ)', 'Щит веры (КИ)', 'Церемония* (XGE)']
var paladin2=['Защита от яда (КИ)', 'Клеймящая кара (КИ)', 'Магическое оружие (КИ)', 'Малое восстановление (КИ)', 'Область истины (КИ)', 'Подмога (КИ)', 'Поиск предмета (КИ)', 'Поиск скакуна (КИ)']
var paladin3=['Аура живучести (КИ)', 'Возрождение (КИ)', 'Дневной свет (КИ)', 'Магический круг (КИ)', 'Мантия крестоносца (КИ)', 'Ослепляющая кара (КИ)', 'Рассеивание магии (КИ)', 'Снятие проклятья (КИ)', 'Сотворение пищи и воды (КИ)', 'Стихийное оружие (КИ)']
var paladin4=['Аура жизни (КИ)', 'Аура очищения (КИ)', 'Защита от смерти (КИ)', 'Изгнание (КИ)', 'Оглушающая кара (КИ)', 'Поиск существа (КИ)', 'Поиск Высшего Скакуна (XGE)']
var paladin5=['Изгоняющая кара (КИ)', 'Круг силы (КИ)', 'Обет (КИ)', 'Оживление (КИ)', 'Разрушительная волна (КИ)', 'Рассеивание добра и зла (КИ)', 'Священное Оружие (XGE)']
var ranger1=['Град шипов (КИ)', 'Дружба с животными (КИ)', 'Лечение ран (КИ)', 'Метка охотника (КИ)', 'Обнаружение болезней и яда* (КИ)', 'Обнаружение магии* (КИ)', 'Опутывающий удар (КИ)', 'Прыжок (КИ)', 'Разговор с животными* (КИ)', 'Сигнал тревоги* (КИ)', 'Скороход (КИ)', 'Туманное облако (КИ)', 'Чудо-ягоды (КИ)', 'Звериные Узы (XGE)', 'Поглощение Стихий (XGE)', 'Силок (XGE)', 'Удар Зефира (XGE)']
var ranger2=['Бесследное передвижение (КИ)', 'Дубовая кора (КИ)', 'Животные чувства* (КИ)', 'Завеса стрел (КИ)', 'Защита от яда (КИ)', 'Малое восстановление (КИ)', 'Поиск животных или растений* (КИ)', 'Поиск ловушек (КИ)', 'Поиск предмета (КИ)', 'Почтовое животное* (КИ)', 'Тёмное зрение (КИ)', 'Тишина* (КИ)', 'Шипы (КИ)', 'Исцеляющий Дух (XGE)']
var ranger3=['Дневной свет (КИ)', 'Защита от энергии (КИ)', 'Молниевая стрела (КИ)', 'Необнаружимость (КИ)', 'Подводное дыхание* (КИ)', 'Призыв животных (КИ)', 'Призыв заграждения (КИ)', 'Разговор с растениями (КИ)', 'Рост растений (КИ)', 'Стена ветров (КИ)', 'Хождение по воде* (КИ)', 'Пылающие Стрелы (XGE)']
var ranger4=['Каменная кожа (КИ)', 'Поиск существа (КИ)', 'Призыв лесных обитателей (КИ)', 'Свобода перемещения (КИ)', 'Цепкая лоза (КИ)', 'Страж Природы (XGE)']
var ranger5=['Быстрый колчан (КИ)', 'Древесный путь (КИ)', 'Общение с природой* (КИ)', 'Призыв залпа (КИ)', 'Гнев Природы (XGE)', 'Удар Стального Ветра (XGE)']
var sorcerer0=['Брызги кислоты (КИ)', 'Волшебная рука (КИ)', 'Дружба (КИ)', 'Защита от оружия (КИ)', 'Леденящее прикосновение (КИ)', 'Луч холода (КИ)', 'Малая иллюзия (КИ)', 'Меткий удар (КИ)', 'Огненный снаряд (КИ)', 'Пляшущие огоньки (КИ)', 'Починка (КИ)', 'Свет (КИ)', 'Сообщение (КИ)', 'Фокусы (КИ)', 'Электрошок (КИ)', 'Ядовитые брызги (КИ)', 'Власть Над Огнём (XGE)', 'Лепка Земли (XGE)', 'Нашествие (XGE)', 'Обморожение (XGE)', 'Раскат Грома (XGE)', 'Сотворение Костра (XGE)', 'Формование Воды (XGE)', 'Шквал (XGE)']
var sorcerer1=['Безмолвный образ (КИ)', 'Ведьмин снаряд (КИ)', 'Волна грома (КИ)', 'Волшебная стрела (КИ)', 'Доспехи мага (КИ)', 'Луч болезни (КИ)', 'Маскировка (КИ)', 'Обнаружение магии* (КИ)', 'Огненные ладони (КИ)', 'Очарование личности (КИ)', 'Падение пёрышком (КИ)', 'Понимание языков* (КИ)', 'Поспешное отступление (КИ)', 'Прыжок (КИ)', 'Псевдожизнь (КИ)', 'Сверкающие брызги (КИ)', 'Туманное облако (КИ)', 'Усыпление (КИ)', 'Цветной шарик (КИ)', 'Щит (КИ)', 'Дрожь Земли (XGE)', 'Катапульта (XGE)', 'Ледяной Кинжал (XGE)', 'Поглощение Стихий (XGE)', 'Снаряд Хаоса (XGE)']
var sorcerer2=['Видение невидимого (КИ)', 'Внушение (КИ)', 'Воображаемая сила (КИ)', 'Глухота/слепота (КИ)', 'Дребезги (КИ)', 'Корона безумия (КИ)', 'Левитация (КИ)', 'Невидимость (КИ)', 'Облако кинжалов (КИ)', 'Обнаружение мыслей (КИ)', 'Открывание (КИ)', 'Отражения (КИ)', 'Палящий луч (КИ)', 'Паук (КИ)', 'Паутина (КИ)', 'Порыв ветра (КИ)', 'Размытый образ (КИ)', 'Смена обличья (КИ)', 'Тёмное зрение (КИ)', 'Туманный шаг (КИ)', 'Тьма (КИ)', 'Увеличение/уменьшение (КИ)', 'Удержание личности (КИ)', 'Улучшение характеристики (КИ)', 'Дыхание Дракона (XGE)', 'Защитный Ветер (XGE)', 'Пекло Аганаззара (XGE)', 'Пиротехника (XGE)', 'Пронзание Разума (XGE)', 'Пылевой Вихрь (XGE)', 'Снежный Шквал Сниллока (XGE)', 'Теневой Клинок (XGE)', 'Узы Земли (XGE)']
var sorcerer3=['Газообразная форма (КИ)', 'Гипнотический узор (КИ)', 'Дневной свет (КИ)', 'Замедление (КИ)', 'Защита от энергии (КИ)', 'Зловонное облако (КИ)', 'Контрзаклинание (КИ)', 'Мерцание (КИ)', 'Метель (КИ)', 'Молния (КИ)', 'Образ (КИ)', 'Огненный шар (КИ)', 'Подводное дыхание* (КИ)', 'Подсматривание (КИ)', 'Полёт (КИ)', 'Рассеивание магии (КИ)', 'Ужас (КИ)', 'Ускорение (КИ)', 'Хождение по воде* (КИ)', 'Языки (КИ)', 'Водяная Стена (XGE)', 'Громовой Шаг (XGE)', 'Дрёма (XGE)', 'Извержение Земли (XGE)', 'Изобилие Врагов (XGE)', 'Мельфовы Маленькие Метеоры (XGE)', 'Приливная Волна (XGE)', 'Пылающие Стрелы (XGE)']
var sorcerer4=['Высшая невидимость (КИ)', 'Град (КИ)', 'Изгнание (КИ)', 'Каменная кожа (КИ)', 'Огненная стена (КИ)', 'Переносящая дверь (КИ)', 'Подчинение зверя (КИ)', 'Превращение (КИ)', 'Смятение (КИ)', 'Усыхание (КИ)', 'Болезненное Сияние (XGE)', 'Водяная Сфера (XGE)', 'Едкий Шар (XGE)', 'Очарование Монстра (XGE)', 'Сфера Бури (XGE)']
var sorcerer5=['Каменная стена (КИ)', 'Конус холода (КИ)', 'Круг телепортации (КИ)', 'Нашествие насекомых (КИ)', 'Облако смерти (КИ)', 'Оживление вещей (КИ)', 'Подчинение личности (КИ)', 'Притворство (КИ)', 'Сотворение (КИ)', 'Телекинез (КИ)', 'Удержание чудовища (КИ)', 'Власть Над Ветрами (XGE)', 'Далекий Шаг (XGE)', 'Испепеление (XGE)', 'Обессиливание (XGE)', 'Синоптический Разряд (XGE)', 'Стена Света (XGE)', 'Усиление Навыка (XGE)']
var sorcerer6=['Движение почвы (КИ)', 'Истинное зрение (КИ)', 'Круг смерти (КИ)', 'Магические врата (КИ)', 'Множественное внушение (КИ)', 'Пляшущая молния (КИ)', 'Разящее око (КИ)', 'Распад (КИ)', 'Солнечный луч (КИ)', 'Сфера неуязвимости (КИ)', 'Ментальная Тюрьма (XGE)', 'Облачение Ветра (XGE)', 'Облачение Камня (XGE)', 'Облачение Льда (XGE)', 'Облачение Огня (XGE)', 'Раскидывание (XGE)']
var sorcerer7=['Замедленный огненный шар (КИ)', 'Изменение тяготения (КИ)', 'Огненная буря (КИ)', 'Перст смерти (КИ)', 'Радужные брызги (КИ)', 'Телепортация (КИ)', 'Уход в иной мир (КИ)', 'Эфирность (КИ)', 'Корона Звёзд (XGE)', 'Слово Силы: Боль (XGE)', 'Смерч (XGE)']
var sorcerer8=['Воспламеняющаяся туча (КИ)', 'Землетрясение (КИ)', 'Подчинение чудовища (КИ)', 'Слово Силы: оглушение (КИ)', 'Солнечный ожог (КИ)', 'Ужасное Увядание Аби-далзима (XGE)']
var sorcerer9=['Врата (КИ)', 'Исполнение желаний (КИ)', 'Метеоритный дождь (КИ)', 'Остановка времени (КИ)', 'Слово Силы: смерть (КИ)', 'Множественное Превращение (XGE)', 'Психический Крик (XGE)']
var warlock0=['Волшебная рука (КИ)', 'Дружба (КИ)', 'Защита от оружия (КИ)', 'Леденящее прикосновение (КИ)', 'Малая иллюзия (КИ)', 'Меткий удар (КИ)', 'Мистический заряд (КИ)', 'Фокусы (КИ)', 'Ядовитые брызги (КИ)', 'Волшебный Камень (XGE)', 'Погребальный Звон (XGE)', 'Нашествие (XGE)', 'Обморожение (XGE)', 'Раскат Грома (XGE)', 'Сотворение Костра (XGE)']
var warlock1=['Адское возмездие (КИ)', 'Ведьмин снаряд (КИ)', 'Доспех Агатиса (КИ)', 'Защита от добра и зла (КИ)', 'Невидимое письмо* (КИ)', 'Невидимый слуга* (КИ)', 'Очарование личности (КИ)', 'Понимание языков* (КИ)', 'Поспешное отступление (КИ)', 'Руки Хадара (КИ)', 'Сглаз (КИ)', 'Вызов Страха (XGE)']
var warlock2=['Внушение (КИ)', 'Дребезги (КИ)', 'Корона безумия (КИ)', 'Луч слабости (КИ)', 'Невидимость (КИ)', 'Облако кинжалов (КИ)', 'Отражения (КИ)', 'Паук (КИ)', 'Речь златоуста (КИ)', 'Туманный шаг (КИ)', 'Тьма (КИ)', 'Удержание личности (КИ)', 'Пронзание Разума (XGE)', 'Теневой Клинок (XGE)', 'Узы Земли (XGE)']
var warlock3=['Газообразная форма (КИ)', 'Гипнотический узор (КИ)', 'Голод Хадара (КИ)', 'Контрзаклинание (КИ)', 'Магический круг (КИ)', 'Образ (КИ)', 'Полёт (КИ)', 'Прикосновение вампира (КИ)', 'Рассеивание магии (КИ)', 'Снятие проклятья (КИ)', 'Ужас (КИ)', 'Языки (КИ)', 'Громовой Шаг (XGE)', 'Изобилие Врагов (XGE)', 'Призыв Низших Демонов (XGE)']
var warlock4=['Изгнание (КИ)', 'Мираж (КИ)', 'Переносящая дверь (КИ)', 'Усыхание (КИ)', 'Болезненное Сияние (XGE)', 'Облачение Тени (XGE)', 'Очарование Монстра (XGE)', 'Призыв Высшего Демона (XGE)', 'Проклятье Стихий (XGE)']
var warlock5=['Вещий сон (КИ)', 'Наблюдение (КИ)', 'Связь с иным миром* (КИ)', 'Удержание чудовища (КИ)', 'Далекий Шаг (XGE)', 'Инфернальный Зов (XGE)', 'Обессиливание (XGE)', 'Пляска Смерти (XGE)', 'Поток Негативной Энергии (XGE)', 'Синоптический Разряд (XGE)', 'Стена Света (XGE)']
var warlock6=['Истинное зрение (КИ)', 'Круг смерти (КИ)', 'Магические врата (КИ)', 'Множественное внушение (КИ)', 'Окаменение (КИ)', 'Призыв феи (КИ)', 'Разящее око (КИ)', 'Сотворение нежити (КИ)', 'Клетка Душ (XGE)', 'Ментальная Тюрьма (XGE)', 'Облачение Ветра (XGE)', 'Облачение Камня (XGE)', 'Облачение Льда (XGE)', 'Облачение Огня (XGE)', 'Раскидывание (XGE)']
var warlock7=['Перст смерти (КИ)', 'Узилище (КИ)', 'Уход в иной мир (КИ)', 'Эфирность (КИ)', 'Корона Звёзд (XGE)', 'Слово Силы: Боль (XGE)']
var warlock8=['Демиплан (КИ)', 'Находчивость (КИ)', 'Подчинение чудовища (КИ)', 'Слабоумие (КИ)', 'Слово Силы: оглушение (КИ)', 'Одуряющая Тьма (XGE)']
var warlock9=['Заточение (КИ)', 'Истинное Превращение (КИ)', 'Предвидение (КИ)', 'Проекция в астрал (КИ)', 'Слово Силы: смерть (КИ)', 'Психический Крик (XGE)']
var wizard0=['Брызги кислоты (КИ)', 'Волшебная рука (КИ)', 'Дружба (КИ)', 'Защита от оружия (КИ)', 'Леденящее прикосновение (КИ)', 'Луч холода (КИ)', 'Малая иллюзия (КИ)', 'Меткий удар (КИ)', 'Огненный снаряд (КИ)', 'Пляшущие огоньки (КИ)', 'Починка (КИ)', 'Свет (КИ)', 'Сообщение (КИ)', 'Фокусы (КИ)', 'Электрошок (КИ)', 'Ядовитые брызги (КИ)', 'Власть Над Огнём (XGE)', 'Погребальный Звон (XGE)', 'Лепка Земли (XGE)', 'Нашествие (XGE)', 'Обморожение (XGE)', 'Раскат Грома (XGE)', 'Сотворение Костра (XGE)', 'Формование Воды (XGE)', 'Шквал (XGE)']
var wizard1=['Безмолвный образ (КИ)', 'Ведьмин снаряд (КИ)', 'Волна грома (КИ)', 'Волшебная стрела (КИ)', 'Доспехи мага (КИ)', 'Жуткий смех Таши (КИ)', 'Защита от добра и зла (КИ)', 'Луч болезни (КИ)', 'Маскировка (КИ)', 'Невидимое письмо* (КИ)', 'Невидимый слуга* (КИ)', 'Обнаружение магии* (КИ)', 'Огненные ладони (КИ)', 'Опознание* (КИ)', 'Очарование личности (КИ)', 'Падение пёрышком (КИ)', 'Поиск фамильяра* (КИ)', 'Понимание языков* (КИ)', 'Поспешное отступление (КИ)', 'Прыжок (КИ)', 'Псевдожизнь (КИ)', 'Сверкающие брызги (КИ)', 'Сигнал тревоги* (КИ)', 'Скольжение (КИ)', 'Скороход (КИ)', 'Тензеров парящий диск* (КИ)', 'Туманное облако (КИ)', 'Усыпление (КИ)', 'Цветной шарик (КИ)', 'Щит (КИ)', 'Вызов Страха (XGE)', 'Дрожь Земли (XGE)', 'Катапульта (XGE)', 'Ледяной Кинжал (XGE)', 'Поглощение Стихий (XGE)', 'Силок (XGE)']
var wizard2=['Вечный огонь (КИ)', 'Видение невидимого (КИ)', 'Внушение (КИ)', 'Волшебные уста* (КИ)', 'Волшебный замок (КИ)', 'Воображаемая сила (КИ)', 'Глухота/слепота (КИ)', 'Дребезги (КИ)', 'Корона безумия (КИ)', 'Левитация (КИ)', 'Луч слабости (КИ)', 'Магическое оружие (КИ)', 'Мельфова кислотная стрела (КИ)', 'Невидимость (КИ)', 'Нетленные останки* (КИ)', 'Нистулова ложная магия (КИ)', 'Облако кинжалов (КИ)', 'Обнаружение мыслей (КИ)', 'Открывание (КИ)', 'Отражения (КИ)', 'Палящий луч (КИ)', 'Паук (КИ)', 'Паутина (КИ)', 'Поиск предмета (КИ)', 'Порыв ветра (КИ)', 'Пылающий шар (КИ)', 'Размытый образ (КИ)', 'Смена обличья (КИ)', 'Тёмное зрение (КИ)', 'Трюк с верёвкой (КИ)', 'Туманный шаг (КИ)', 'Тьма (КИ)', 'Увеличение/уменьшение (КИ)', 'Удержание личности (КИ)', 'Дыхание Дракона (XGE)', 'Защитный Ветер (XGE)', 'Земляная Хватка Максимилиана (XGE)', 'Небесные Письмена* (XGE)', 'Пекло Аганаззара (XGE)', 'Пиротехника (XGE)', 'Пронзание Разума (XGE)', 'Пылевой Вихрь (XGE)', 'Снежный Шквал Сниллока (XGE)', 'Теневой Клинок (XGE)', 'Узы Земли (XGE)']
var wizard3=['Восставший труп (КИ)', 'Газообразная форма (КИ)', 'Гипнотический узор (КИ)', 'Замедление (КИ)', 'Защита от энергии (КИ)', 'Зловонное облако (КИ)', 'Контрзаклинание (КИ)', 'Леомундова хижина* (КИ)', 'Магический круг (КИ)', 'Мерцание (КИ)', 'Метель (КИ)', 'Молния (КИ)', 'Необнаружимость (КИ)', 'Образ (КИ)', 'Огненный шар (КИ)', 'Охранные руны (КИ)', 'Подводное дыхание* (КИ)', 'Подсматривание (КИ)', 'Полёт (КИ)', 'Послание (КИ)', 'Призрачный скакун* (КИ)', 'Прикосновение вампира (КИ)', 'Притворная смерть* (КИ)', 'Проклятие (КИ)', 'Рассеивание магии (КИ)', 'Снятие проклятья (КИ)', 'Ужас (КИ)', 'Ускорение (КИ)', 'Языки (КИ)', 'Водяная Стена (XGE)', 'Дрёма (XGE)', 'Громовой Шаг (XGE)', 'Извержение Земли (XGE)', 'Изобилие Врагов (XGE)', 'Крошечный Слуга (XGE)', 'Мельфовы Маленькие Метеоры (XGE)', 'Передача Жизни (XGE)', 'Песчаная Стена (XGE)', 'Призыв Низших Демонов (XGE)', 'Приливная Волна (XGE)', 'Пылающие Стрелы (XGE)']
var wizard4=['Верный пёс Морденкайнена (КИ)', 'Власть над водами (КИ)', 'Воображаемый убийца (КИ)', 'Высшая невидимость (КИ)', 'Град (КИ)', 'Изгнание (КИ)', 'Изготовление (КИ)', 'Изменение формы камня (КИ)', 'Кабинет Морденкайнена (КИ)', 'Каменная кожа (КИ)', 'Леомундов потайной сундук (КИ)', 'Магический глаз (КИ)', 'Мираж (КИ)', 'Огненная стена (КИ)', 'Огненный Щит (КИ)', 'Отилюков упругий шар (КИ)', 'Переносящая дверь (КИ)', 'Поиск существа (КИ)', 'Превращение (КИ)', 'Призыв малых элементалей (КИ)', 'Смятение (КИ)', 'Усыхание (КИ)', 'Эвардовы чёрные щупальца (КИ)', 'Болезненное Сияние (XGE)', 'Водяная Сфера (XGE)', 'Едкий Шар (XGE)', 'Очарование Монстра (XGE)', 'Призыв Высшего Демона (XGE)', 'Проклятье Стихий (XGE)', 'Сфера Бури (XGE)']
var wizard5=['Вещий сон (КИ)', 'Длань Бигби (КИ)', 'Знание легенд (КИ)', 'Изменение памяти (КИ)', 'Каменная стена (КИ)', 'Конус холода (КИ)', 'Круг телепортации (КИ)', 'Ментальная связь Рэри* (КИ)', 'Наблюдение (КИ)', 'Облако смерти (КИ)', 'Оживление вещей (КИ)', 'Планарные узы (КИ)', 'Подчинение личности (КИ)', 'Призыв элементаля (КИ)', 'Притворство (КИ)', 'Связь с иным миром* (КИ)', 'Силовая стена (КИ)', 'Создание прохода (КИ)', 'Сотворение (КИ)', 'Обет (КИ)', 'Телекинез (КИ)', 'Удержание чудовища (КИ)', 'Фальшивый двойник (КИ)', 'Власть Над Ветрами (XGE)', 'Далекий Шаг (XGE)', 'Инфернальный Зов (XGE)', 'Испепеление (XGE)', 'Обессиливание (XGE)', 'Пляска Смерти (XGE)', 'Поток Негативной Энергии (XGE)', 'Преобразование Камня (XGE)', 'Рассвет (XGE)', 'Синоптический Разряд (XGE)', 'Стена Света (XGE)', 'Удар Стального Ветра (XGE)', 'Усиление Навыка (XGE)']
var wizard6=['Волшебный сосуд (КИ)', 'Движение почвы (КИ)', 'Дромиджево появление* (КИ)', 'Заданная иллюзия (КИ)', 'Истинное зрение (КИ)', 'Круг смерти (КИ)', 'Ледяная стена (КИ)', 'Магические врата (КИ)', 'Множественное внушение (КИ)', 'Неудержимая пляска Отто (КИ)', 'Окаменение (КИ)', 'Отилюков ледяной шар (КИ)', 'Пляшущая молния (КИ)', 'Предосторожность (КИ)', 'Разящее око (КИ)', 'Распад (КИ)', 'Солнечный луч (КИ)', 'Сотворение нежити (КИ)', 'Стражи (КИ)', 'Сфера неуязвимости (КИ)', 'Клетка Душ (XGE)', 'Ментальная Тюрьма (XGE)', 'Облачение Ветра (XGE)', 'Облачение Камня (XGE)', 'Облачение Льда (XGE)', 'Облачение Огня (XGE)', 'Раскидывание (XGE)', 'Сотворение Гомункула (XGE)', 'Трансформация Тензера (XGE)']
var wizard7=['Великолепный особняк Морденкайнена (КИ)', 'Замедленный огненный шар (КИ)', 'Знак (КИ)', 'Изменение тяготения (КИ)', 'Изоляция (КИ)', 'Меч Морденкайнена (КИ)', 'Перст смерти (КИ)', 'Подобие (КИ)', 'Проекция (КИ)', 'Радужные брызги (КИ)', 'Таинственный мираж (КИ)', 'Телепортация (КИ)', 'Узилище (КИ)', 'Уход в иной мир (КИ)', 'Эфирность (КИ)', 'Корона Звёзд (XGE)', 'Слово Силы: Боль (XGE)', 'Смерч (XGE)']
var wizard8=['Антипатия/симпатия (КИ)', 'Власть над погодой (КИ)', 'Воспламеняющаяся туча (КИ)', 'Двойник (КИ)', 'Демиплан (КИ)', 'Лабиринт (КИ)', 'Подчинение чудовища (КИ)', 'Преграда магии (КИ)', 'Слабоумие (КИ)', 'Слово Силы: оглушение (КИ)', 'Сокрытие разума (КИ)', 'Солнечный ожог (КИ)', 'Телепатия (КИ)', 'Иллюзорный Дракон (XGE)', 'Могучая Крепость (XGE)', 'Одуряющая Тьма (XGE)', 'Ужасное Увядание Аби-далзима (XGE)']
var wizard9=['Врата (КИ)', 'Заточение (КИ)', 'Исполнение желаний (КИ)', 'Истинное Превращение (КИ)', 'Метеоритный дождь (КИ)', 'Остановка времени (КИ)', 'Полное Превращение (КИ)', 'Предвидение (КИ)', 'Проекция в астрал (КИ)', 'Радужная стена (КИ)', 'Слово Силы: смерть (КИ)', 'Смертный ужас (КИ)', 'Множественное Превращение (XGE)', 'Неуязвимость (XGE)', 'Психический Крик (XGE)']


var table_of_contents = '<a href="Chapter00.html">Введение</a><i>Часть 1: Создание Персонажа</i><a href="Chapter01.html">Глава 1: Создание Персонажа</a><a href="Chapter02.html">Глава 2: Расы</a><a href="Chapter03.html">Глава 3: Классы</a><a href="Chapter04.html">Глава 4: Личность и Предыстория</a><a href="Chapter05.html">Глава 5: Снаряжение</a><a href="Chapter06.html">Глава 6: Индивидуальные Опции</a><a href="Chapter07.html">Глава 7: Использование Характеристик</a> <i>Часть 2: Играя в Игру</i><a href="Chapter08.html">Глава 8: Приключения</a><a href="Chapter09.html">Глава 9: Сражение</a> <i>Часть 3: Правила Магии</i><a href="Chapter10.html">Глава 10: Использование Заклинаний</a><a href="Chapter11.html">Глава 11: Заклинания</a><a href="Chapter11test.html">Глава 11: Заклинания из различных дополнений (тест)</a><a href="Chapter11zen.html">Глава 11: Дизигн</a><a href="Chapter11search.html">Глава 11: Поиск по Заклинаниям</a><i>Приложения</i><a href="Attachment01.html">Приложение A: Состояния</a><a href="Attachment02.html">Приложение Б: Боги Мультивселенной</a><a href="Attachment03.html">Приложение В: Планы Существования</a><a href="Attachment04.html">Приложение Г: Параметры Существ</a><i>Разное</i><a href="pocket.html">Генератор краж носовых платков</a>'

/*ПОЖАЛУЙСТА ПОФИКСИТЕ ЭТО*/
/*Скрытие лайт бокса. */
function hidelight() {
    if (check != 1)
    {
    document.getElementById('lightbox').style.display='none'
    if (found.length > 0)
    	{
    		for (var i=0; i<found.length; i++) {
    		console.log(des[found[i]].innerHTML)
    		des[found[i]].innerHTML = des[found[i]].innerHTML.replace(/<span>/g, '');
			console.log(des[found[i]].innerHTML)
			}
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

}

function openBook() {
  document.getElementById("inputform").style.display = "none";
  document.getElementById("searchbook").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("searchform").style.display = "block";
  document.getElementById("nothing").style.display="none";


}

function openNav() {
	document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}





function pagename() {

current_display_table = document.getElementById(class_name+level_number+'Table');
current_display_spell = document.getElementsByClassName('spellname')[0];
current_display_class = document.getElementById('bard');
document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents

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








if (classus == 'paladin' || classus == 'ranger')
{
  
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


}



function ChangeLevel(levelus) {
current_display_class.style.backgroundColor = 'orange';
level_number = levelus


document.getElementsByClassName('circle')[current_display_level].style.backgroundColor = 'white';
document.getElementsByClassName('circle2')[current_display_level].style.backgroundColor = 'white';


current_display_level = Number(level_number)

if (class_name == 'paladin' || class_name == 'ranger')
{
    document.getElementById('long19').style.display='none';
    document.getElementById('shrt15').style.display='block';
    document.getElementsByClassName('circle2')[current_display_level].style.backgroundColor = 'orange';
}
else 
{
    document.getElementById('shrt15').style.display='none';
    document.getElementById('long19').style.display='block';
    document.getElementsByClassName('circle')[current_display_level].style.backgroundColor = 'orange';	
}

//console.log(eval(class_name+current_display_level))


var content = '<div class="TableBody"><div class="TableRow">'
for(i=0; i<eval(class_name+current_display_level).length; i++){
	if ((i+1) % 6 == 0) {
		content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + eval(class_name+current_display_level)[i] + '</div></div><div class="TableRow">';	
	}
	else {
		content += '<div class="TableCell2" onclick=Search(this.innerHTML) ontouch=Search(this.innerHTML)>' + eval(class_name+current_display_level)[i] + '</div>';
	}

}

content += '</div></div>'

document.getElementById('table').innerHTML=content
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

document.getElementById('lightbox').style.display='block'
}





function SearchString() {
//found = 0

document.getElementById('lightbox').style.display='block';

var check=document.getElementById('searchall').checked;
var neadlestring = document.getElementById('neadlestring').value.toLowerCase();
var neadlestringex = neadlestring[0].substring(0,1).toUpperCase() + neadlestring.slice(1)

replaceser = '<span>'+neadlestring+'</span>';
replaceser2 = '<span>'+neadlestringex+'</span>';

for (var i=0; i<des.length; i++) 
{
des[i].innerHTML = des[i].innerHTML.replace(/<span>/g, '');
new_string = des[i].innerHTML


if (check === true) {
  if ((des[i].innerHTML.indexOf(neadlestring.toUpperCase()) >= 0) || (des[i].innerHTML.indexOf(neadlestring) >= 0) || (des[i].innerHTML.indexOf(neadlestringex) >= 0))  {
	var new_string=new_string.replace(new RegExp(neadlestring, 'g'), replaceser);
	var new_string=new_string.replace(new RegExp(neadlestringex, 'g'), replaceser2);
    var new_string=new_string.replace(neadlestring.toUpperCase(), '<span>'+neadlestring.toUpperCase()+'</span>');
    des[i].style.display = 'block';
    found.push(i)
  } 
  else {
    des[i].style.display = 'none';
  }
  	des[i].innerHTML=new_string;
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






if (found.length == 0)
	{
		document.getElementById("nothing").style.display="block";
	}
else
	{
		document.getElementById("nothing").style.display="none";
}
}



