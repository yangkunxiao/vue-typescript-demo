import 'reflect-metadata'
import { Response,Request }  from 'express'
 
export const symbolPathKey = Symbol.for('router:path')

export const path = function(path:string):Function {
    return function(target:any,targetkey:string,descroptior:PropertyDescriptor){
        console.log('path')
        Reflect.defineMetadata(symbolPathKey,path,target,targetkey);
        if(!descroptior.value) return 
        let oldMethod = descroptior.value;
        descroptior.value = function(req:Request,res:Response){
            const params = Object.assign({},req.body,req.query);
            let result = oldMethod.call(this,params);
            res.send(result)
        }
    }
}