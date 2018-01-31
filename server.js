var express = require('express');
var port = process.env.PORT || 9090;

var app = express();

//app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./router'));

app.listen(port, function () {
    console.log("App listening on http://localhost:" + port);
});