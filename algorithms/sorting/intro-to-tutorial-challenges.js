function processData(input) {
    var inputLines = input.split("\n");
    var key = inputLines[0];
    var arraySize = inputLines[1];
    var dataArray = ("" + inputLines[2]).split(" ");
    
    if (1 > arraySize || arraySize > 1000) return;
    if (dataArray.length != arraySize) return;
    
    var output = "";
    
    for (var i=0; i<arraySize; i++){
        if (dataArray[i] < -1000 || dataArray[i] > 1000) return;
        if (dataArray[i] == key){
            output = i;
            break;
        }
    }
    
    process.stdout.write(output);
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
