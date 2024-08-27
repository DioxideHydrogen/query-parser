# Query Parser JS ![Javscript Logo](https://img.icons8.com/?size=35&id=39853&format=png&color=000000)


![NPM Version](https://img.shields.io/npm/v/queryparserjs)

A simple javascript library for you map and search the query params of your web application easily and fast!

## Install

One command and all your query params are in your hands!

```bash
npm i queryparserjs
```

## How to use

Fast like rocket and easy like blink your eyes, this is how you can use this awesome library after installed it.

For web-browsers, use this way:

```html
<script src="./dist/queryparserjs.min.js" type="text/javascript"></script>
<script type="text/javascript">
	const qs = new qsParser(); 
	console.log(qs.all());
</script>
```

For nodejs enviroments, the way is by here:

```node
const qsParser = require('../src/index');
const qs = new qsParser('?param1=value1&param2=value2');
console.log(qs.all()); // { param1: "value1", param2: "value2"}
```

And voyala! You can use all class methods for get informations about the url query.


### Collaborate!

If you like this or any other mine project and want to sponsor of any form, now you can!

[<img src="https://img.icons8.com/?size=50&id=VBWGOOUxXQA3&format=png&color=000000">](https://www.paypal.com/donate/?hosted_button_id=A7Y2RMSPS326Y)