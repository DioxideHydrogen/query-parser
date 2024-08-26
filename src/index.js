if(!window.qsParser){
	const qsParser = new Object();

	/**
	 * Remove a interrogação do início da string
	 * @param {String} query_string 
	 * @returns string
	 * @example
	 * qsParser.removeInterrogation('?param1=valor1&param2=valor2'); // retorna 'param1=valor1&param2=valor2'
	 */
	qsParser.removeInterrogation = function(query_string){
		return query_string.slice(1);
	}

	qsParser.query_string = qsParser.removeInterrogation(window.location.search);

	qsParser.query_params = (function(){

		let params = qsParser.query_string.split('&');
		let obj = {};

		for(let i = 0; i < params.length; i++){
			let param = params[i].split('=');
			obj[param[0]] = param[1];
		}

		return obj;

	})();

	/**
	 * Retorna o valor de um parâmetro da query string
	 * @param {String} param
	 * @returns string
	 * @example	
	 * qsParser.get('parametro'); // retorna o valor do parâmetro 'parametro'
	 */
	qsParser.get = function(param){
		return qsParser.query_params[param];
	}

	/**
	 * Adiciona um parâmetro à query string
	 * @param {String} param
	 * @param {String} value
	 * @returns string
	 * @example
	 * qsParser.add('parametro', 'valor'); // retorna 'param1=valor1&param2=valor2&parametro=valor'
	 */
	qsParser.add = function(param, value){
		return qsParser.query_string + '&' + param + '=' + value;
	}

	window.qsParser = qsParser;

}

