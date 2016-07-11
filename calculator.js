var calculator = function (firstNumber){
	return {
		sum: function(){
			var res = firstNumber;
			for (var i = 0; i < arguments.length; i++) {
				res += arguments[i];
			};
			return res;
		},
		dif: function(){
			var res = firstNumber;
			for (var i = 0; i < arguments.length; i++) {
				res -= arguments[i];
			};
			return res;
		},
		div: function(){
			try{
				var res = firstNumber;			
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] === 0){
						throw new Error('На ноль делить нельзя!!!');
					}
					res = res / arguments[i];
				};
				return res;
			}catch(e){
				console.error(e.message);
			}			
		},
		mul: function(){
			var res = firstNumber;			
			for (var i = 0; i < arguments.length; i++) {				
				res = res * arguments[i];
			};
			return res;
		},
	}
};
module.exports = calculator;