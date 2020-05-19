/**
 * 顾名思义，"装饰器" (也叫 "注解")就是对一个 类/方法/属性/参数 的装饰。
 * 它是对这一系列代码的增强，并且通过自身描述了被装饰的代码可能存在的行为改变。
 * 简单来说，装饰器就是对代码的描述
 *
 */
// import 'reflect-metadata';
/* 
var validate = function(){
    return function (
        target: any,
        targetKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log(target, targetKey, descriptor);
        //保存原来的方法
        let method = descriptor.value;
        //重写原有的方法
        descriptor.value = function(newValue:string){
            // 检查是否是空字符串
            if (!newValue) {
                throw Error('name is invalid')
            } else {
                // 否则调用原来的方法
                method.call(this, newValue)
            }
        }

    }
}

class User {
	name: string
	id: number
	constructor(name: string, id: number) {
		this.name = name
		this.id = id
	}

	// 调用装饰器
	@validate()
	changeName(newName: string) {
		this.name = newName
	}
}


let user = new User('kaka', 25)

user.changeName('');

console.log(user.name) */

//类装饰器 重写类的构造函数
/* 
const A  = function(){
    return function(constructor){
        console.log(constructor);
        return class extends constructor {
            name = 'hudie'
        }
    }
}
@A()
class B {
    public name:string;
    constructor(name:string){
        this.name = name
    }
}

let b = new B('kaka');

console.log(b.name) */


//方法装饰器
/**
 * target:对于类的静态成员，指的是类的构造函数。对于类的实例成员，指的是类的原型对象
 * targetKey：成员的名称
 * descriptor：成员的属性描述符。
 *  {value: any, writable: boolean, enumerable: boolean, configurable: boolean}
 */
/* function C(){
    return function (target:any,targetKey:string,descriptor:PropertyDescriptor){
        console.log('🍎：',target)
        console.log('🍎：',targetKey)
        console.log('🍎：',descriptor)
    }
}

class D {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    @C()
    getName(){
        return this.name
    }

    @C()
    static getAge(){
        return 10
    }
}

let d = new D('kaka');

console.log(d.getName())

D.getAge() */


//访问器修饰符  同方法修饰器 只是用于访问器上
//不同点就是修饰符使用的是 访问器修饰符 
//{get: function, set: function, enumerable: boolean, configurable: boolean}
/* function E(){
    return function(target:any,targetKey:string,descriptor:PropertyDescriptor){
        console.log('🍎：',target)
        console.log('🍎：',targetKey)
        console.log('🍎：',descriptor)
    }
}

class F {
    private _name: string = 'kaka';
    // 装饰在访问器上
    @E()
    get name () {
        return this._name
    }
}

let f = new F();

console.log(f.name) */


/**
 * 属性修饰器
 * 在运行时会被当作函数使用 传入两个参数
 *  target: 对于静态成员来说 是类的构造函数  对于实例成员来说 是类的原型对象
 *  targetKey: 成员名称
*/

/* function G(){
    return function(target:any,targetKey:string){
        console.log('🍎：',target)
        console.log('🍎：',targetKey)
    }
}

class H {
    //实例成员 --> 类的原型对象
    @G()
    public name:string;
    //静态属性 --> 类的构造函数
    @G()
    static money:number = 1000;

    constructor(name:string){
        this.name = name
    }
}

let h = new H('kaka');

console.log(h.name) */


/**
 * 参数修饰器
 * 参数装饰器表达式会在运行时当作函数被调用，传入下列 3个参数：
 *  - target ： 对于静态成员来说 指的是类的构造函数。 对于实例成员来说 指的是类的原型对象
 *  - targetKey : 成员名称
 *  - parameterIndex : 参数在函数参数中的索引
*/

/* function I(){
    return function(target:any,targetKey:string,parameterIndex:number){
        console.log('🍎：',target)
        console.log('🍎：',targetKey)
        console.log('🍎：',parameterIndex)
    }
}

class J {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    setName(value:string, @I() key:string){
        this.name = value;
    }
}

let j = new J('kaka'); */


//

import 'reflect-metadata';

const requiredKey = Symbol.for("required:key");

//定制一个参数装饰器
/* var required = function(){
    console.log('参数装饰器1')
    return function(target:any,targetKey:string,index:number){
        console.log('参数装饰器2')
        const rules = Reflect.getMetadata(requiredKey,target) || [];
        rules.push(index);
        // console.log(rules,'---')
        Reflect.defineMetadata(requiredKey,rules,target)
    }
}

var validateEmptyStr = function(){
    console.log('方法装饰器1')
    return function(target:any,targetKey:string,descriptor:PropertyDescriptor){
        let methods = descriptor.value;
        console.log('方法装饰器2')
        let rules = Reflect.getMetadata(requiredKey,target)
        // console.log(rules)
        descriptor.value = function (){
            let args = arguments;
            // console.log(args,'args')
            let rules = Reflect.getMetadata(requiredKey,target) as Array<number>;
            if(rules && rules.length){
                rules.forEach(key => {
                    if(!args[key]){
                       throw Error(`arguments${key} is invalid`)
                    }
                })
            }
            return methods.apply(this,arguments)
        }
    }
}

class User {
    name:string;
    id:number;

    constructor(name:string,id:number){
        this.name = name;
        this.id = id;
    }
    @validateEmptyStr()
    setName(@required() value){
        this.name = value
    }
}

let u = new User('kaka',25);
u.setName('hudie') */


/**
 * 元数据反射
 * 反射就是在运行时动态获取一个对象的一切信息：属性、方法等。其特点在于动态类型反推导。
 * 在Typescript中就是在设计阶段对对象注入元数据，在运行阶段读取注入的元数据。
*/

function meta(){
    return function(target:any,targetKey:string,descriptor:PropertyDescriptor){
        //获取成员类型
        let type = Reflect.getMetadata('design:type',target,targetKey);
        console.log(type)//[Function: Function]
        //获取参数类型
        let paramsType = Reflect.getMetadata('design:paramtypes',target,targetKey);
        console.log(paramsType)//[ [Function: String] ]
        //获取返回值类型
        let returnType = Reflect.getMetadata('design:returntype',target,targetKey);
        console.log(returnType)//[Function: String]
        //获取所以元数据的key（有TypeScript注入）
        let keys = Reflect.getMetadataKeys(target,targetKey);
        console.log(keys)//[ 'design:returntype', 'design:paramtypes', 'design:type' ]
    }
}

class User {
    @meta()
    say (myName: string): string {
        return `hello, ${myName}`
    }

}