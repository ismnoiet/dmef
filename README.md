# dmef
> Double Minimal Express.js framework, it can be used for experimentation and learning purposes as it simplified the maximum, even a beginner programmer can read and understand the code source.

*PRs Are welcome.*

## Install
```
npm install  --save dmef
```

## Usage
```js
// example
var App = require('dmef');

var app = new App();

app.get('/',function(request,response){	
	response.end('You are in the home page');
});

app.get('/contact',function(request,response){	
	response.end('You are in the contact page');
});

// listen on any port you wish, in this example 3000 
app.listen(3000);
```

You can execute the default example by running : 
```
node example/index.js
```

## TODO
* Add other essential parts. 

## License

MIT © [ismnoiet](https://blog.ismnoiet.com)



