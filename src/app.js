const jwt = require('jsonwebtoken');
require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended= true }));



console.log('secret is' process.env.ACCESS_TOKEN_SECRETE);

