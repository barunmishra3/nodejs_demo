import * as okrabyte from "okrabyte";
import * as fs from "fs";
export class OcrDemo{
    async getAllImageFiles(){
         return await new Promise((resolve,reject)=>{
            fs.readdir("src/img",(err,files)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(files);
                }
            })
        })
       
    }
    async getInfoFromImg(imgsrc){
        return new Promise((reject,resolve)=>{
            let stream = fs.createReadStream(imgsrc);
            okrabyte.decodeStream(stream, function(error, data){
                if(error){
                    reject(error)
                }else{
                    resolve(data)
                }
              });
        })
      
    }
}