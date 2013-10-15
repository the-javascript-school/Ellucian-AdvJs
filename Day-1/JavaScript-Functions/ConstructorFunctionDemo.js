function Employee(id,name,salary){
  if (!(this instanceof Employee)) return new Employee(id,name,salary);
  this.id = id;
  this.name = name;
  this.salary = salary;
}

//Creating accessors
function Employee(id,name,salary){
  if (!(this instanceof Employee)) return new Employee(id,name,salary);
  var 	_id,
  		_name,
  		_salary = 0;

  this.id = function(){
  	return _id;
  };
  this.name = function(){
  	if (arguments.length == 0) return _name;
  	if (!arguments[0]) throw new Error('invalid name');
  	_name = arguments[0];
  };

  this.salary = function(){
  	if (arguments.length == 0) return _salary;
  	if (arguments[0] > _salary) _salary = arguments[0];
  }

  _id = id;
  this.name(name);
  this.salary(salary);
}


