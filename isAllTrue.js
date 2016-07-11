var isAllTrue = function(source, filterFn){
	try{
		if (!source||!Array.isArray(source)||source.length==0){
			throw new Error('Первым параметром должен быть непустой массив!');
		}
		for (var i = 0; i < source.length; i++) {
		 	if(!filterFn(source[i])){return false;}
		};
		return true;
	}catch(e){
		console.error(e.message);
	}
};
module.exports = isAllTrue;