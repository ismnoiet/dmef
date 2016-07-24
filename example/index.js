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