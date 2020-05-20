function seald (constructor:Function){
    console.log(constructor)
    return class extends constructor {

    }
}

@seald
class People {
    public name:string;
    constructor(name:string){
        this.name = name
    }
}

/**
 * https://www.npmjs.com/package/reflect-metadata
 * 注解
 * Reflect.defineMetadata(metadataKey, metadataValue, C.prototype, "method");
 * 获取注入的元数据
 * Reflect.getMetadata(metadataKey, obj, "method"); 
 */

import 'reflect-metadata';
const key = Symbol('kaka');

function inject (indexService){
    return function(target,targetkey,index){
        console.log(target,targetkey,index);
        Reflect.defineMetadata(key,'kaka',target);
    }
}

class IndexController {
    public indexService;
    constructor(@inject('xxx') indexService){
        this.indexService = indexService;
    }
} 

let indexController = new IndexController('typescript');


console.log('🍎：',indexController.indexService);
console.log('🍌：',Reflect.getMetadata(key,IndexController));


