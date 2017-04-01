process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
       if (isPrime(n)) {
           console.log("Prime");
       } else {
           console.log("Not prime");
       }
     }
    
    function isPrime(num) {

        if (num < 2)
            return false;
        if (num === 2) {
            return true;
        }
        if (num === 3) {
            return true;
        }
        if ( (num % 2) === 0)
            return false;
        
        if ( (num % 3) === 0)
            return false;
        
        for(var i=2; i<= Math.sqrt(num); i++) {
            if(num%i==0) {
             return false;
            }
        }
        return true;        
    }
}
