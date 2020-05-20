//public 修饰的方法或属性是公有的  可以被任意访问  类的属性或方法默认为public
//private 只能被父类自己访问 不能在声明它的类外部使用
//protected 只能被父类和子类访问


//抽象类 子类必须实现抽象类中的抽象方法
abstract class Person {
    public name:string = 'kaka';
    private weight:number = 25;
    protected sex:string = '男';

    abstract makeSound():void;

    move(distance:number):void {
        console.log(this.name + '已经前进了：' + distance + '步')
    }
}

class Boy extends Person {
    constructor(name,weight,sex){
        super();
        this.name = name;
        // this.weight = weight
        this.sex = sex
    }

    makeSound(){
        console.log('makeSound')
    }

}

let tom = new Boy('tom',100,25);

tom.makeSound();

tom.move(100)



abstract class Animal {
    eat(food:string):void {
        console.log('eat:' + food)
    }
    abstract sleep():void
}


class Dog extends Animal {
    public name:string;

    constructor(name:string){
        super();
        this.name = name
    }

    run(){}

    sleep(){
        console.log('Dog sleep')
    }

    private pri(){}

    protected pro(){}

    readonly legs:number = 4

    static food:string = 'bones'
    
}

let dog = new Dog('wangcai');

// dog.pri()

// dog.pro()

// console.log(dog.food)

console.log(Dog.food)

dog.eat('🍌')


class WorkFlow {
    step1(){
        console.log('🍌调用类step1')
        return this
    }

    step2(){
        console.log('🍎调用类step2')
        return this
    }
}

class MyFlow extends WorkFlow {
    next(){
        return this
    }
}

let myFlow = new MyFlow()

myFlow.next().step1().next().step2().step1().step2() 