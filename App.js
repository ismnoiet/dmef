var http = require('http');

var server = ''; // this will hold the server instance

function App(){        

    this.methods = {        
        'get':[],
        'post':[],
        'update':[],
        'delete':[]
    }            
}

var manageRequests = function(request,response){
    // lowercase http verbs to avoid case problems
    var method = request.method.toLowerCase(); 
    var url    = request.url || '/';    

    // if route defined then execute it. 
    var index   = this['methods'][method].map(function(item){return item.url}).indexOf(url);        
    if(index >= 0){
        this['methods'][method][index].callback(request,response);
    }
}

App.prototype.execute = function(method,url,callback){    
    // if url already exists override it     
    var index = this['methods'][method].map(function(item){return item.url}).indexOf(url);        
    if( index >= 0){
        this['methods'][method][index].callback = callback;
    }else{
        this['methods'][method].push({url:url,callback:callback});
    }    
}
App.prototype.get = function(url,callback){
    this.execute('get',url,callback);
    return this;
}
App.prototype.post = function(url,callback){
    this.execute('post',url,callback);
    return this;
}
App.prototype.update = function(url,callback){
    this.execute('update',url,callback);
    return this;
}
App.prototype.delete = function(url,callback){
    this.execute('delete',url,callback);
    return this;
}

App.prototype.listen = function(port){
    // at this point we are sure the http callback will be executed in the context
    // of the instance of 'app'
    manageRequests = manageRequests.bind(this); 
    server = http.createServer(manageRequests);
    server.listen(port);
}

module.exports = App;
