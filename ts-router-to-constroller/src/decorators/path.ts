import 'reflect-metadata'
import { Response,Request }  from 'express'
 
export const symbolPathKey = Symbol.for('router:path')

export const path = function(path:string):Function {
    return function(target:any,targetkey:string,descroptior:PropertyDescriptor){
        //注解：注入元数据 --> 请求路径
        Reflect.defineMetadata(symbolPathKey,path,target,targetkey);
        //如果不存在回调函数
        if(!descroptior.value) return 
        //保存原始回调函数
        let oldMethod = descroptior.value;
        //重写回调函数 
        descroptior.value = function(req:Request,res:Response){
            //获取请求参数
            const params = Object.assign({},req.body,req.query);
            //调用回调函数 获取返回值
            let result = oldMethod.call(this,params);
            //给浏览器发送结果
            res.send(result)
        }
    }
}