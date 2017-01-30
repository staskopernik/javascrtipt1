//document.write('Hello World!');
//var hello = 'Hello World';
//alert(hello);
//console.log(hello);

var userName = prompt('Enter your name');
var greet = 'Hello ' + userName;
document.write(greet);
var userAge = Number(prompt('Enter your age'));
if (isNaN(userAge)) {
    document.write(' Please enter a number')
    } else{
    var nextAge = addOne(userAge);
    document.write('<br> Soon you will be ' + nextAge);
}

function addOne(someNum){
    var result = someNum + 1;
    return result;
}
Math.sqrt(4);