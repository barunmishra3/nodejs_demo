import * as express from "express";
import * as bodyParser from "body-parser";
import { DbConnect } from "./mongo_services/db_connect";
import { SecurityFilter } from "./pages/security.filter";
const puppeteer = require('puppeteer');
const  absolutify = require('absolutify');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@demo-e1kbp.mongodb.net/test?retryWrites=true";
let client = new MongoClient(uri, {useNewUrlParser: true });
require('dotenv').config() 
const app = express()
const port = 9090
var router = express.Router()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
let collection:any = "";
new SecurityFilter(app);



