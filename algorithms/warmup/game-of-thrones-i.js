function processData(input) {
    if (input.length<1) return;
    if (input.length > 100000) return;
    if (input.toLowerCase() != input) return;
    
    var inputArray = input.split('');
    inputArray.sort();
    
    impairCases = 0;
    for (i=0; i<inputArray.length; i++){
        if (!inputArray[i+1]) break;
        if (inputArray[i] == inputArray[i+1]){
            i++;
        } else {
            impairCases++;
        }
    }
    
    if (impairCases > 1){
        process.stdout.write("NO");
    } else {
        process.stdout.write("YES");
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
