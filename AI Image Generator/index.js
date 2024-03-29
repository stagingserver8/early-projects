
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`Server started on port ${port}`))
app.use('/openai', require('./routes/openaiRoutes'))



