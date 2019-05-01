import * as express from "express";
export class RouterConfigOutlet{
    private app:express;
    private router;
    constructor(app:express){
        try{
            this.app = app
             this.router = express.Router();
             this.app.use('/', this.router)

             this.initRoute();
        }catch(err){
            console.log(err);
        }
         
    }
    initRoute(){
        this.router.use("/",((req,res,next)=>{
            console.log("hello");
            next()
        }))
        this.router.get("/",((req,res)=>{
            res.send('hello');
        }))
      
    }
}