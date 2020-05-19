import 'reflect-metadata'

export const symbolHttpMethodsKey = Symbol("router:httpMethod")

function createMethods(method:string){
    return function httpMethodDecorator(target:any,targetKey:string){
        console.log('HTTP')
        Reflect.defineMetadata(symbolHttpMethodsKey,method,target,targetKey);
    }
}

export const httpGet = createMethods('get');
export const httpPost = createMethods('post');