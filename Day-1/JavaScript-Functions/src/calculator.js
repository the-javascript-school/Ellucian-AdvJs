function add(){
	function parseArg(arg){
		if (typeof arg == "function") return parseArg(arg());
		if (typeof arg == "string")
			return (isNaN(arg)) ? 0 : parseInt(arg);
		if (!!arg.length) return add.apply(this,arg);
		return arg;
	}
	return arguments.length == 0 ? 0 : 
		(arguments.length == 1 ? parseArg(arguments[0]) 
			: parseArg(arguments[0]) + add.apply(this,[].splice.call(arguments,1)));
}
