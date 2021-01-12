const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
  //__dirname : It will resolve to the project folder.
});

app.get('/exercise',function(req,res){
  res.sendFile(path.join(__dirname + '/public/exercise.html'));
  //__dirname : It will resolve to the project folder.
});


app.get('/stats',function(req,res){
  res.sendFile(path.join(__dirname + '/public/stats.html'));
  //__dirname : It will resolve to the project folder.
});



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./Main/public/routes/api.js.js"));
app.use(require("./Main/public/routes/view.js.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
