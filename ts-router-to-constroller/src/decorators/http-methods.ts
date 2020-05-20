import 'reflect-metadata'

export const symbolHttpMethodsKey = Symbol("router:httpMethod")

function createMethods(method:string){
    return function httpMethodDecorator(target:any,targetKey:string){
        //注解：注入元数据 --> 请求方法
        Reflect.defineMetadata(symbolHttpMethodsKey,method,target,targetKey);
    }
}

export const httpGet = createMethods('get');
export const httpPost = createMethods('post');