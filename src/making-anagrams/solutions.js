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
    var a = readLine();
    var b = readLine();
    
    
    var deletions = 0;
    
    var hashMapA = stringToHashMap(a);
    var hashMapB = stringToHashMap(b);
    
    var sameLetters = getSameLetters(hashMapA,hashMapB);
    var lettersAndFrecuencies = minFrecuencies(sameLetters,hashMapA,hashMapB);
    
    var minSize = getSize(lettersAndFrecuencies);
    
    var deletions = (a.length - minSize) +  (b.length - minSize);
    
    console.log(deletions);
    
    function getSize(lettersAndFrec) {
        
        var size = 0;
        Object.keys(lettersAndFrec).forEach(function(letter){
            
            size = size + lettersAndFrec[letter];
            
        })
        
        return size;
        
    }
    
    function minFrecuencies(sameLetters,hashMap1,hashMap2) {
        
        var lettersAndFrecuencies = {};
        sameLetters.forEach (function (letter) {
            
            var minFrec = getMin(hashMap1[letter],hashMap2[letter])
            lettersAndFrecuencies[letter] = minFrec;  
            
        })
        
        return lettersAndFrecuencies;
        
    }
    
    
    function getMin(num1,num2) {
        
        if (num1 <= num2)
            return num1;
        else
            return num2;
            
    }
    
    function getSameLetters(hashMap1,hashMap2) {
        
        var sameLetters = [];
        Object.keys(hashMap1).forEach( function(letter) {
           if (hashMap2[letter] !== undefined )
               sameLetters.push(letter);
        });
        
        return sameLetters;
        
    }
    
    
    function stringToHashMap(string) {
        
        var hashMap = {};
        
        for (var i = 0; i < string.length; i++) {
            
            if (hashMap[string[i]] === undefined) {
                hashMap[string[i]] = 1;
            }else {
                hashMap[string[i]]++;
            }
        }
        
        return hashMap;
        
    }

}
