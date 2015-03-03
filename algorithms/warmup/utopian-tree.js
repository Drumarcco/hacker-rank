'use strict';


function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parse_fun(lines.shift());

    var data = lines.splice(0, T).map(parse_fun);

    // logic here
    if(T < 1 || T > 10) return;
    var output = '';
    for (var i=0; i<data.length; i++){
        if(data[i] < 0 || data[i] > 60) return;
        var result = 1;
        for(var j=0; j<data[i]; j++){
            if(j%2 == 0) result *= 2;
            if(j%2 == 1) result++;
        }
        output += result + "\n";
    }
    process.stdout.write(output);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });