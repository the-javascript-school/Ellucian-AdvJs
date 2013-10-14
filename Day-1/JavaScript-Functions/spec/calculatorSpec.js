describe("A calculator",function(){
	describe("Add operation",function(){
		it("should be able to add 2 numbers",function(){
			//arrange
			var number1 = 10
				,number2 = 20
				,expectedResult = 30;

			//act
			var result = add(number1,number2);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add 1 number",function(){
			//arrange
			var number1 = 10
				,expectedResult = number1;

			//act
			var result = add(number1);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("add returns 0 when no arguments are passed",function(){
			//arrange
			var expectedResult = 0;

			//act
			var result = add();

			//assert
			expect(result).toBe(expectedResult);
		});	
		it("should be able to add numbers in string format",function(){
			//arrange
			var numberInString = "10"
				,expectedResult = 10;

			//act
			var result = add(numberInString);

			//assert
			expect(result).toBe(expectedResult);
		});	
		it("should be able to ignore non numbers",function(){
			//arrange
			var nonNumberInString = "abc"
				,expectedResult = 0;

			//act
			var result = add(nonNumberInString);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add more than two numbers",function(){
			//arrange
			var number1 = 10,
				number2 = 20,
				number3 = 30,
				expectedResult = 60;

			//act
			var result = add(number1,number2,number3);

			//assert
			expect(result).toBe(expectedResult);
		});	
		it("should be able pass a function returning a number as an argument",function(){
			//arrange
			var funReturningNumber = function(){ return 10},
				expectedResult = 10;

			//act
			var result = add(funReturningNumber);

			//assert
			expect(result).toBe(expectedResult);
		});	
		it("should be able to be passed with nested functions returning numbers as argument",function(){
			//arrange
			var funReturningFunReturingNumber = function(){ 
					return function(){return 10}
				},
				expectedResult = 10;

			//act
			var result = add(funReturningFunReturingNumber);

			//assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add an array of numbers",function(){
			//arrange
			var arrayOfNumbers = [1,2,3],
				expectedResult = 6;

			//act
			var result = add(arrayOfNumbers);

			//assert
			expect(result).toBe(expectedResult);
		});	
	});
	
});