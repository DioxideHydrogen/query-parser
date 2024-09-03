const QueryParserError = require("./Errors/QueryParserError");
const { version } = require('../package.json');
/**
 * One helpful class to parse your webapps query string
 * @class
 * @example
 * let parser = new qsParser('?param1=valor1&param2=valor2');
 * console.log(parser.get('param1')); // 'valor1'
 */
class qsParser {

  constructor(query_string = '') {

    this.version = '1.0.0';

    if (typeof window !== 'undefined') {
      this._query_string = this._removeInterrogation(window.location.search ?? '');
    } else {
      if (!query_string) throw new QueryParserError('You must provide a query string');
      this._query_string = this._removeInterrogation(query_string);
    }

    this._query_params = this._parseQueryString(this._query_string);

  }

  /**
   * Remove a interrogação do início da string
   * @param {String} query_string 
   * @returns string
   */
  _removeInterrogation = function (query_string) {
    if (query_string.charAt(0) === '?') return query_string.slice(1);
    if (query_string.indexOf('?') > 0) return query_string.split('?')[1];
	return query_string;
  }

  /**
   * Converte a query string em um objeto
   * @param {String} query_string
   * @returns object
   */
  _parseQueryString = function (query_string) {

	if(!query_string) return {};

    let params = query_string.split('&');

    let obj = {};

    for (let i = 0; i < params.length; i++) {
      let param = params[i].split('=');
	  // Verifica se o parâmetro é um array
	  if(decodeURIComponent(param[0]).indexOf('[]') > -1) {
		let key = decodeURIComponent(param[0]).replace('[]', '');
		if(!obj[key]) obj[key] = [];
		obj[key].push(decodeURIComponent(param[1]));
		continue;
	  }
	  // Verifica se o parâmetro é um array com índices
	  if(decodeURIComponent(param[0]).match(/\[(.*?)\]/g)) {
		let key = decodeURIComponent(param[0]).match(/([A-z0-9_-])+\[(.*?)+\]/g)[0].replace(/\[(.*?)+\]/,'');
		let index = decodeURIComponent(param[0]).match(/\[(.*?)+\]/g)[0].replace('[', '').replace(']', '');
		if(!obj[key]) obj[key] = [];
		if(!obj[key][index]) obj[key][index] = [];
		obj[key][index].push(decodeURIComponent(param[1]));
		continue;
	  }
	  // Verifica se o parâmetro é um objeto
      obj[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
    }

    return obj;
  }

  /**
   * Retorna o valor de um parâmetro da query string
   * @param {String} param
   * @returns string
   * @example	
   * let parser = new qsParser('?param1=valor1&param2=valor2');
   * console.log(parser.get('param1')); // 'valor1'
   */
  get = function (param) {
    return this._query_params[param];
  }

  /**
   * Adiciona um parâmetro à query string
   * @param {String} param
   * @param {String} value
   * @returns string
   * @example
   * let parser = new qsParser('?param1=valor1&param2=valor2');
   * console.log(parser.add('param3', 'valor3')); // '?param1=valor1&param2=valor2&param3=valor3'
   */
  add = function (param, value) {

    this._query_params[param] = value;

    return this.toString();

  }

  /**
   * Retorna todos os parâmetros da query string
   * @returns object
   * @example
   * let parser = new qsParser('?param1=valor1&param2=valor2');
   * console.log(parser.all()); // { param1: 'valor1', param2: 'valor2' }
   */
  all() {
	return this._query_params;
  }
  
  /**
   * Retorna a query string em uma string formatada como JSON
   * 
   * @returns string
   * @example
   * let parser = new qsParser('?param1=valor1&param2=valor2');
   * console.log(parser.json()); // '{"param1":"valor1","param2":"valor2"}'
   */
  json(){
	return JSON.stringify(this._query_params);
  }

  applyToLocation() {
	if (typeof window !== 'undefined') {
	  window.location.search = this.toString();
	} else {
	  throw new QueryParserError('This method only works in browser environment');
	}
  }

  /**
   * Retorna a query string em string
   * @returns string
   * @example
   * let parser = new qsParser('?param1=valor1&param2=valor2');
   * console.log(parser.toString()); // 'param1=valor1&param2=valor2'
   */
  toString() {
	let query_string = '?';
	for (let key in this._query_params) {
	  if(Array.isArray(this._query_params[key])) {
		this._query_params[key].forEach((value, index) => {
		  query_string += key + '[' + index + ']=' + value + '&';
		}
		);
		continue;
	  }
	  query_string += key + '=' + this._query_params[key] + '&';
	}
	return query_string.slice(0, -1);
  }

}

if(typeof window !== 'undefined') window.qsParser = qsParser;

if(typeof module !== 'undefined') module.exports = qsParser;

console.log('qsParser is loaded at version v' + version + '. Enjoy!');