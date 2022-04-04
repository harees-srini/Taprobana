var express = require("express");
var path = require("path");
var app = express();
var routes = require("./routes");

app.listen(process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(routes);

