# event-in-nodejs

- sum function to add number even though characters are there
'add':function(args){
	var sum = 0;
	for (var i = 0; i < args.length; i++) {
		if( !isNaN(parseInt(args[i]))){
			sum = sum + parseInt(args[i]);
		}
		}
		console.log("sum is "+sum);
	}
