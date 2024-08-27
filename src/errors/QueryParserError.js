class QueryParserError extends Error {
  constructor(message) {
	super(message);
	this.name = 'QueryParserError';
  }
}

module.exports = QueryParserError;