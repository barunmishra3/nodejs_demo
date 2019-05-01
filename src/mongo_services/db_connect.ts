import { throws } from "assert";
require('dotenv').config() 
const MongoClient = require('mongodb').MongoClient;

export  class DbConnect{
    private client
    private dbName:String;
    private collectionName:String;
    private static dbConnectObj:DbConnect;
    private collectionRef:any;
    private constructor(){
        this.client = {} 
        this.dbName = "";
        this.collectionName = "";
        this.collectionRef = {};
    }
    public static getDbConnect(){
        if(DbConnect.dbConnectObj == undefined || DbConnect.dbConnectObj == null){
            DbConnect.dbConnectObj = new DbConnect();
        }
        return DbConnect.dbConnectObj;
    }
    public  getCollection(){
        return new Promise(async(resolve,reject)=>{
            MongoClient.connect(process.env.DB_CONNECTION_STRING_URI,{useNewUrlParser: true },(err,client) => {
                if(err){
                    reject(err)
                }else{
                     resolve(client.db(this.dbName).collection(this.collectionName))
                }
               
             });
        })
    }
    public closeConnection(){
        this.client.close();
    }
    public setDbDetails(dbName:String,collectionName:String){
        this.dbName = dbName;
        this.collectionName = collectionName;
    }
}