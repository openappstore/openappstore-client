var npm = require("npm"),
    express = require("express");

var npmConfig = {};

npm.load(npmConfig, function (err) {
  if (err)  {
    console.log(err);
    return;
  }
});

var app = express.createServer();

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.set("view engine", "html");
app.register(".html", require("jqtpl").express);

app.get('/', function(req, res){
  res.render('./index.html', {layout: null});
});

app.get('/install/:app', function(req, res){
  
  npm.commands.install([req.params.app], function (err, result) {
    if (err)  {
      console.log(err);
      return;
    }
    console.log('success!', result);
    
    res.send({success: result.length > 0 });
  });

});

app.listen(3000);
