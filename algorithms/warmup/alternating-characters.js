function processData(input) {
    var inputInLines = input.split('\n');
    var linesNumber = inputInLines[0];
    inputInLines.splice(0, 1);
    
    if (linesNumber != inputInLines.length) return;
    if (linesNumber < 1) return;
    if (linesNumber > 10) return;
    
    var output = '';
    for (i=0; i<inputInLines.length; i++){
        var line = inputInLines[i];
        if (line.length > 100000) return;
        var counter = 0;
        for (j=0; j<line.length; j++){
            if(!line[j+1]) continue;
            if (line[j] == line[j+1]) counter++;
        }
        output += counter + '\n';
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