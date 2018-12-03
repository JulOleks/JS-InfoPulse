//описание функции
function calcSum(num1, num2) {
    console.log(num1, num2);
    return num1 + num2;
}
//вызов функции
console.log(calcSum(2, 4));


function square(a, h) {

    return 0.5 * a * h;
}
console.log(square(4, 5));

function getCalcs(foodName, weight) {
    var foodData = {
            "Grechnevaya kasha": 137,
            "KolbasaDoktarskaya": 237,
            "Yogurt 1.5%": 65,
            "Kabachki": 30
        },
        cals = 0;
    if (foodData[foodName]) {
        cals = foodData[foodName] * weight / 100;
    } else {
        console.log("There is no such food in our DB");
    }
    return cals;
}
console.log(getCalcs("Grechnevaya kasha", 130), "калл");

function getDinnerCalcs(dinnerData) {
    var foodData = {
            "Grechnevaya kasha": 137,
            "KolbasaDoktarskaya": 257,
            "Yogurt 1.5%": 65,
            "Kabachki": 30,
            "Pechenki": 543,
            "Grapefruit": 37
        },
        cals = 0;
    for (var foodName in dinnerData) {
        cals += foodData[foodName] * dinnerData[foodName] / 100;

    }
    return Math.round(cals);
}
var myDinner = {
    "Grechnevaya kasha": 130,
    "KolbasaDoktarskaya": 100,
    "Kabachki": 50,
    "Grapefruit": 140

}
console.log(getDinnerCalcs(myDinner), "cals");

var dinnerCals = getDinnerCalcs(myDinner);


function spendCalsSport(weight, time) {
    var sport = {
        "cycle": 0.075,
        "training": 0.083,
        "cardio": 0.125
    }
    calsSport = 0;

    for (var id in sport) {
        calsSport += weight * sport[id] * time;
    }
    return calsSport;
}
console.log("Spend calories for sport:", spendCalsSport(45, 20), "cals");
var sportCals = spendCalsSport(45, 20);


function countleftCals(allCals, spendCals) {
    var leftCals = allCals - spendCals;

    return Math.round(leftCals);
}
console.log("Left calories:", countleftCals(dinnerCals, sportCals),"cals");
var leftCals = countleftCals(dinnerCals, sportCals);

function houseWorks(tdust,tiron,tcook) {
    var works = {
            "dust": 80,
            "iron": 220,
            "cook": 171
        },
        hour = 60,
        houseWorks = 0;
      
    for (var id in works) {
        houseWorks = works[id] / hour * tdust + works[id] / hour * tiron + works[id] / hour * tcook;
    }
    return houseWorks;
}

console.log("Spend calories for house works:", houseWorks(10, 25, 40),"cals");
var calsHouse = houseWorks(10, 25, 40);
console.log("Left calories:", countleftCals(leftCals,calsHouse),"cals");