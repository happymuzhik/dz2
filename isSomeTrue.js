var isSomeTrue = function(source, filterFn){
	try{
		if (!source||!Array.isArray(source)||source.length==0){
			throw new Error('Первым параметром должен быть непустой массив!');
		}
		for (var i = 0; i < source.length; i++) {
		 	if(filterFn(source[i])){return true;}
		};
		return false;
	}catch(e){
		console.error(e.message);
	}
};
module.exports = isSomeTrue;