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

### Methods

This is the description of all `Query Parser Class` methods, let's take as an example that we are in the URL bellow:

`http://www.yourniceproject.com/page?param1=value1`

| Method | Description | Example | Return |
| ------ | ----------- | ------- | ------ |
| `get()`| Use for get the value of a query param | `qs.get('param1');` | `"value1"`|
| `add()` | Use for add a new query param to parsed query in class object | `qs.add('param2','value2');` | `?param1=value1&param2=value2` |
| `all()` | Use for get all the query params as an object | `qs.all();` | `{"param1":"value1","param2":"value2"}` | 
| `json()` | Use for get the query param as a json string | `qs.json();` | `'{"param1":"value1","param2":"value2"}'` | 
| `applyToLocation()` | Use for apply all stored query params to your actual location | `qs.applyToLocation();` | Follow to location: `http://www.yourniceproject.com/page?param1=value1&param2=value2` |
| `toString()` | Use for get all the stored query params as query string | `qs.toString();` | `?param1=value1&param2=value2` | 

#### Good to know

For add an array or object to query is just passed it to the add method:

```html
<script type="text/javascript">

    const qs = new qsParser();
    
    // Adding a array
    qs.add('emails',['email1@test.com','email2@test.com']); // ?emails[0]=email1@test.com&emails[1]=email2@test.com

    // Adding a object
    qs.add('person', {
        'name':['Hugo Henrique'],
        'age':[21]
    }); // ?emails[0]=email1@test.com&emails[1]=email2@test.com&person[name]=Hugo Henrique&person[age]=21

</script>
```