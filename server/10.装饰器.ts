/**
 * 顾名思义，"装饰器" (也叫 "注解")就是对一个 类/方法/属性/参数 的装饰。
 * 它是对这一系列代码的增强，并且通过自身描述了被装饰的代码可能存在的行为改变。
 * 简单来说，装饰器就是对代码的描述
 *
 */

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