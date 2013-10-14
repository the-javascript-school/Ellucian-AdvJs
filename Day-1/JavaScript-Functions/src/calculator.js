function add(){
	function parseArg(arg){
		if (typeof arg == "function") return parseArg(arg());
		if (typeof arg == "string")
			return (isNaN(arg)) ? 0 : parseInt(arg);
		if (!!arg.length) return add.apply(this,arg);
		return arg;
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}
