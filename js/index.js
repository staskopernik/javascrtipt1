var a = Number(prompt('Enter  a'));
var b = Number(prompt('Enter  b'));
var c = Number(prompt('Enter  c'));
var quadra = quadraticEquationSolution(a, b, c);
document.write('<br>' + quadra);

function quadraticEquationSolution(a, b, c) {
    if (a !== 0) {
        var D = b * b - 4 * a * c;
        var result
        if (D === 0) {
            var x = -b / (2 * a);
            result = 'x1 = x2 = ' + x;
        }
        else {
            if (D > 0) {
                var x1 = (-b + Math.sqrt(D)) / (2 * a);
                var x2 = (-b - Math.sqrt(D)) / (2 * a);
                result = 'x1 = ' + x1 + '; x2 = ' + x2;
            }
            else {
                result = 'There is no solution';
            }
        }
    } else {
        if(b === 0){
            result = 'There is no solution';
        } else {
            x = -c/b;
            result = 'x1 = x2 = ' + x;
        }
    }
    
    document.write(result);
}