function processData(input) {
    //Enter your code here
    var n = input.split("\n")[0];
    if (n<1) return;
    if (n>=100) return;
    if (n%2 != 1) return;
    
    var charArray = input.split("\n")[1];
    charArray = charArray.split(" ");
    
    if (n != charArray.length) return;
    
    charArray.sort();
    
    for (i=0; i<charArray.length; i++){
        if (charArray[i+1] === undefined){
            console.log(charArray[i]);
            return;
        }
        
        if (i%2 === 0){
            if (charArray[i] != charArray[i+1]){
                console.log(charArray[i]);
                return;              
            }
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});