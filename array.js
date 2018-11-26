// 1. Массив чисел
// вывести элементы через каждые 2
var arr = [4, 3, 5, 15, 10, 11, 0],
    result = "";
for (var i = 0; i < arr.length; i += 3) {
    result += arr[i] + " ";
}
console.log("Every 2 elements:",result);
console.log("----------------------");
// - вывести элементы, которые больше, чем сумма первого и последнего элементов

var result = "";
var sum = 0;
sum = arr[0] + arr[6];
console.log(sum);
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > sum) {
        result += arr[i] + " ";
    }
}
console.log("Elements that are bigger:", result);
console.log("----------------------");
// вывести среднее арифметическое
var sum = 0,
    average = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log("Summ:", sum);
}
sum /= arr.length;
console.log("Average:", sum);
console.log("----------------------");
// 2. На базе предыдущего массива сформировать новый массив, в который записать только чётные значения
var nums = [],
    result = "";
for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
        nums.push(arr[i]);
    }
    console.log("New array:", nums);
}
console.log("----------------------");
// 3. ассоциативный многомерный массив гороскоп
console.log('Horoscope');
var day = new Date();

var horoscope = {

    "1": {

        "Гороскоп на понедельник": "Сегодня звезды гороскопа с удвоенной силой будут склонять к осторожности, а также к необходимости тщательно взвешивать все «за» и «против», а потому приготовьтесь, что любое решение, пусть даже самое незначительное, будет даваться вам с большим трудом. ",
        "Ведическая астрология": "день Чандры, Луны. Луна - это главная королевская женская планета, являющаяся воплощением материнского аспекта Вселенной.Это день не для активных действий!"
    },
    "2": {

        "Гороскоп на вторник": "Сегодня звезды гороскопа настойчиво советуют вам как можно активнее общаться с окружающими, но при этом больше слушать, чем говорить. В делах такая тактика обещает принести неожиданные плоды, вплоть до новых предложений, выгодных сделок или даже повышения по службе.",
        "Ведическая астрология": "Марс - это мощная, горячая, агрессивная мужская планета. Марс - это планета воинов и защитников, планета, дающая нам энергию, способность ставить цели и достигать их.В этот день предназначен как раз для любых активных действий во внешнем мире."
    },
    "3": {

        "Гороскоп на среду": "Сегодня звезды гороскопа раз за разом будут провоцировать неуёмное желание одним махом разобраться с проблемами и делами, которые тяготили вас уже давно. Не сопротивляетесь этому порыву: день действительно хорош для того, чтобы довести до конца ранее начатое. ",
        "Ведическая астрология": "Меркурий - планета логики и интеллекта, юмора и находчивости, образования и речи. Меркурий, как известно, бог торговли и покровитель всех бизнесменов. В этот день благоприятно изучать что-то новое, начинать учебу, создавать что-то своим интеллектом."
    },
    "4": {

        "Гороскоп на четверг": "Сегодня стремления и возможности будут находиться в гороскопе на разных полюсах. Весь день звезды будут склонять к активным, энергичным действиям, однако организм будет активно противиться этому порыву, предпочитая отдыхать и расслабляться. ",
        "Ведическая астрология": "Юпитер - всеблагой, огромная благостная планета истинных духовных знаний, покровитель юриспруденции и политики (в древние времена политики были источником высших духовных знаний). "
    },
    "5": {

        "Гороскоп на пятницу": "День будет удачным для поездок и путешествий, командировок и переезда. Для людей, в этот день заболевших, болезнь может оказаться весьма опасной. Снам, в большинстве случаев, можно доверять. Ребенку, родившемуся сегодня, не суждена внешняя красота, поэтому только своим умом и знаниями, доброжелательностью и прилежным трудом привлечет он к себе внимание. ",
        "Ведическая астрология": "Венера - это богиня любви, страсти и красоты. Венера - женская планета, дающая в высшем своем проявлении способность к безусловной любви.В пятницу благоприятно отдыхать красиво, посещать театр, проводить время с любимым человеком где-то именно в красивом месте, дарить подарки себе и любимым. "
    },
    "6": {

        "Гороскоп на субботу": "Сегодня звезды гороскопа задают сразу два противоположных тренда: с одной стороны день предполагает большие возможности, с другой же – лень. Работа может вызывать апатию и вялость, однако даваться будет легче обычного. ",
        "Ведическая астрология": "Сатурн - это самая холодная  планета, которая покровительствует пожилым людям. Сатурн - жестокая и хладнокровная планета. Это день, который в идеале необходимо провести наедине, в медитации, в глубоком погружении в себя, в мыслях о смысле жизни. "
    },
    "0": {

        "Гороскоп на воскресенье": "Сегодня звезды гороскопа на стороне тех, кто не пренебрегает порядком, так что если у вас получилось прийти на работу без опоздания, вы уже на полпути к успеху! ",
        "Ведическая астрология": "Это день Сурьи - Солнца. Солнце - это главная королевская мужская планета, которая дает жизнь, энергию, жизненную прану, но также может и погубить, сделав человека бессильным, эгоистичным и неуверенным в себе.В этот день благоприятно рано вставать, с восходом солнца, выполнить комплекс Сурья Намаскар"
    }
};

console.log(horoscope[day.getDay()]);
console.log("----------------------");
// 4. ассоциативный многомерный массив погода вывести погоду на неделю в цикле

var weather = {
    "Monday 26.11": {
        "temperature": -1,
        "humidity": 88,
        "rainfallProbability": 61,
        "pressure": 743
    },
    "Tuesday 27.11": {
        "temperature": -3,
        "humidity": 57,
        "rainfallProbability": 46,
        "pressure": 741
    },
    "Wednesday 28.11": {
        "temperature": -4,
        "humidity": 25,
        "rainfallProbability": 15,
        "pressure": 756
    },
    "Thursday 29.11": {
        "temperature": -5,
        "humidity": 38,
        "rainfallProbability": 32,
        "pressure": 758
    },
    "Friday 30.11": {
        "temperature": -9,
        "humidity": 53,
        "rainfallProbability": 38,
        "pressure": 765
    },
    "Saturday 1.12": {
        "temperature": -8,
        "humidity": 31,
        "rainfallProbability": 22,
        "pressure": 761
    },
    "Sunday 2.12": {
        "temperature": -10,
        "humidity": 50,
        "rainfallProbability": 46,
        "pressure": 751
    }

};
for (var weeks in weather) {
    // console.log("Weeks:" + weeks, weather[weeks])

    console.log(weeks + ":", "Temperature:", weather[weeks].temperature, "°C", "Humidity:", weather[weeks].humidity, "%", "Rainfall Probability:", weather[weeks].rainfallProbability, "Pressure:", weather[weeks].pressure, "%");

};
console.log("----------------------");
// 5. массив одежда

var clothes = {

    "452100": {

        "Name": "Sweater",
        "Price": 30,
        "Color": ["red", "white", "green"],
        "Size": ["xs", "s", "m", ]

    },
    "56100": {

        "Name": "Jeans",
        "Price": 50,
        "Color": ["black", "blue", "white"],
        "Size": ["s", "m", "l", "xl"]

    },
    "652143": {

        "Name": "Coat",
        "Price": 120,
        "Color": ["brown", "white", "sandy"],
        "Size": ["xs", "s", "l"]

    },
    "09674": {

        "Name": "T-shirt",
        "Price": 10,
        "Color": ["white", "pink", "black"],
        "Size": ["s", "m", "l"]

    },
    "7774321": {

        "Name": "Hoody",
        "Price": 25,
        "Color": ["grey", "white", "black"],
        "Size": ["m", "l", "xl", "xxl"]

    },
    "096754": {

        "Name": "Skirt",
        "Price": 28,
        "Color": ["blue", "black", "white"],
        "Size": ["s", "m", "l"]
    }
};



console.log(clothes["096754"]);
console.log("Size:", clothes["096754"].Size );
console.log("---------------------")
for (var id in clothes) {
    if (clothes[id].Color.indexOf("black") !=-1) {
        console.log("Article:"  + id, clothes[id]);
    }
};

    /*console.log(id+":","Name:",clothes[id].Name, "Price:",clothes[id].Price," € ", "Color:", clothes[id].Color, "Size:",clothes[id].Size);
    };*/
    console.log("---------------------")
/*var Article == prompt('Enter article', '');
for(var id  in clothes){
    if(Article = clothes.id){
 console.log(clothes.
}
}*/