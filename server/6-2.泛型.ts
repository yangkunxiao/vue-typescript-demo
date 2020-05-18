//泛型
//就是解决类、接口、方法的复用性、以及对不确定数据类型的支持


//泛型约束
// interface LengthWise {
//     length:number
// }

// function getLength<T extends LengthWise> (arg:T):T{
//     console.log("获取泛型T：",arg.length)
//     return arg
// }

// getLength({
//     length:100,
//     name:'k'
// })

// function identity<T>(arg:T): T{
//     return arg
// }

// let func = identity<string>('123')


//泛型类

// class Girl<T> {
//     public x:T;
//     public y:T;
//     addSum: (x:T,y:T) => T;
//     // constructor(x,y){
//     //     this.x = x;
//     //     this.y = y
//     // }
// }

// let girl = new Girl<number>();

// girl.x = 1;
// girl.y = 12;

// console.log(girl.x)
// console.log(girl.y)

// girl.addSum = function(x:number,y:number): number{
//     return x + y
// }


// //泛型约束中使用类型参数
// function getProperty(obj:T,key:K){
//     return obj[key]
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


//函数重载
// function getString(value:string):string {
//     return value
// }

// function getData<T>(value:T): T {
//     return value
// }


// getData<number>(12)
// getData<string>('12')


//泛型接口

// interface Teacher<T> {
//     (name:T) : T
// }

// let MrsMa:Teacher<number> = function(x:number){
//     return x
// }

// MrsMa(12)


interface Teacher {
    <T>(name:T) : T
}
let MrsMa:Teacher = function<T>(value:T):T {
    return value
}

MrsMa<number>(12)