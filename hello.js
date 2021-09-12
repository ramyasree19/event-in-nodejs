var fs = require('fs'); //fs is module
// include 
// import

console.log("Hello world ...");
// 3-4 lines
// JS
// a = 90 //number 
// a = "Vivek" //string 
// a = true //boolean 
// a = function(){} //function 
// a = () => {} //function 
// a = {}  or [] //object 

var commands = {
'pwd': function () {
	console.log(process.cwd());
},
'ls': function (args) { // New property added here.
	fs.readdir(args[0] || process.cwd(), function (err, entries) {
		entries.forEach(function (e) {
			console.log(e);
		});
	});
},
'sum':function(args){
    let s=0;
    for(var i=0;i<args.length;i++){
        if(!isNaN(args[i])){
            s=s+(parseInt(args[i]));
            
        }
        else{
            s=s;
        }
        
    }
    console.log(s);

	//console.log("sum is "+(parseInt(args[0]) +parseInt(args[1])));
}	
};


process.stdin.on('data', function (input) {
	var matches = input.toString().match(/(\w+)(.*)/);
    //var matches = input.toString().match(/ain/gi)
    //console.log(matches);
	var command = matches[1].toLowerCase();
    //console.log(command);
	var args = matches[2].trim().split(/\s+/);
    //console.log(command);
	try{
		commands[command](args);	
	}catch(e){
		console.log("Error:"+e);
	}
});