import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import { RouterConfigOutlet } from "./router.outlet";

export class SecurityFilter{
    private app:express;
    constructor(expressObj:express){
        this.app = expressObj;
        this.init();
    }
    init(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));  
        this.app.use(cors())
        new RouterConfigOutlet(this.app);
    }
}