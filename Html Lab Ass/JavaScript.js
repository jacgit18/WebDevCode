//Joshua Carpentier
//JS0a
function calculate1() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var body = document.getElementById("body");

    var area = base * height/2;
    //alert(area);
    body.innerHTML += "<br/> The Area is    " + area + "for the base    " + base +"  and the height is    " + height ;
}
//JS0b
function calculate2() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var body = document.getElementById("body");

    var sum = num1 + num2;
    var diff = num1 - num2;
    var product = num1 * num2;
    var quo = num1 / num2;
    var avg = (num1 + num2) /2;
    //'&nbsp &nbsp &nbsp &nbsp &nbsp'
    //alert(area);
    body.innerHTML += "<br/> Sum of " + '   ' + num1 + "and " + num2 + "is " + sum +
    "and the difference is " + diff + "their product is " + product +
    ",their qoutient is " + quo + "and the average is " + avg + ".";
}

