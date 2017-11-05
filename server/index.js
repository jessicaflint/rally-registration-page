const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

// app.get('/api/memberList', (req, res) => {
//   mailchimp.get(`/lists/${list_id}/members`)
//   .then(function(results){
//     res.send(results);
//   })
//   .catch(function(err){
//     res.send(err);
//   });
// });

app.use(express.static(path.resolve(__dirname, '../', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', function (req, res) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
});

//catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});
const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express app listening on port ${port}`);
