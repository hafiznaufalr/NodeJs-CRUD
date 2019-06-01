const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const postsRoute = require('./routes/posts'); 
//midlewares
app.use(cors())
app.use(bodyParser.json());

app.use('/posts', postsRoute);

//routes
app.get('/', (req,res)=>{
  res.send("We are on home");
});


//connect db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true }, 
  ()=>console.log("Connected to db"));

app.listen(3000);