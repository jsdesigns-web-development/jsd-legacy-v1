const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(compression());

app.use(express.static("public"));
app.use('/modules', express.static('node_modules'));

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

// defining route files
app.use(require('./routes/index'));
//app.use("/admin",require('./routes/admin'));

var server = app.listen(port, () => {
  console.log("\n/********************************************/");
  console.log('\tServer listening on port ' + port + '!');
  console.log("/********************************************/\n");
});
