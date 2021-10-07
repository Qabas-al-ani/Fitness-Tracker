// start by requiring libraries
const express = require('express');
const logger = require('logger');
const mongoose = require('mongoose')

// declaring the port 
const PORT = process.env.PORT || 3000;

// declaring the application
 const app = express();