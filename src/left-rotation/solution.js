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
    var n_temp = readLine().split(' ');
    var size = parseInt(n_temp[0]);
    var rotations = parseInt(n_temp[1]);
    array = readLine().split(' ');
    array = array.map(Number);
    
    
    //left rotation
    var firstPart = reverse(array.slice(0,rotations));
    var secondPart = reverse(array.slice(rotations,size));
    
    var res = reverse(firstPart.concat(secondPart))
    
    console.log(res.join(' '));
    
    
    
    
    function reverse(array) {
        
        var initialPos = 0;
        var endPos = array.length -1;

        while (initialPos < endPos) {
            
            var temp = array[initialPos];
            array[initialPos] = array[endPos];
            array[endPos] = temp;
            initialPos++;
            endPos--;
        }
        
        return array;
        
    }
    
    
    

}
