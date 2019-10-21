const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://samuel:budokai102@ds137498.mlab.com:37498/testerocketseat', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');
app.use('/api', require('./src/routes'));

app.listen(3001);

