//总结：
// 1.能用 interface 实现，就用 interface , 如果不能就用 type
// 2.https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases 类型别名
// 3.创建新类型就用interface 组合类型就用type


//相同点
//都可以描述一个对象或者函数
//都可以扩展

//不同点
//interface可以 而type不可以
    // interface可以声明合并
//type可以 而interface不可以
    //type 可以声明基本类型别名、联合类型、元组等
    //type 可以通过 typeof 获取实例类型进行赋值


//相同点1
interface User {
    name:string,
    age:number
}

// type User = {
//     name:string,
//     age:number
// }

// interface SetUser {
//     (name:string,age:number): void
// }

// type SetUser = {
//     (name:string,age:number):void
// }

// const fn:SetUser = function(name:string,age:number){
//     console.log(name,age)
// }

// fn('kaka',25)


//相同点2
// interface Sex {
//     sex:string
// }

// interface BSex extends Sex {
//     age:number
// }

// type Sex = {
//     sex:string
// }

// type BSex = Sex & {
//     age:number
// }

//复杂的转化
// type FName = {
//   name: string;
// };
// interface FUser extends FName {
//   age: number;
// }
interface FName {
  name: string;
}
type FUser = FName & {
  age: number;
};


//不同点

// type 可以而 interface 不行
// type 可以声明基本类型别名，联合类型，元组等类型

//基本类型别名

// type SName = string;

//联合类型

type UName = {
    name:string
}

type USex = {
    sex:string
}

type Boy = UName | USex;

const boy: Boy = {
    name:'l',
    sex:'girl'
}

interface Dog {
    wong();
}
interface Cat {
    miao();
}
type Pert = Dog | Cat;

type PertList = [Dog,Cat]

//type 语句中还可以使用 typeof 获取实例的 类型进行赋值

// 当你想获取一个变量的类型时，使用 typeof
// let div = document.createElement('div');
// type B = typeof div

//其他
type StringOrNumber = string | number;
// let somestr:StringOrNumber = 12;

type Txt = string | { text: string };
// let txt:Txt = { text:'12' }

// type NameLookup = Dictionary<string, Person>;

type Callback<T> = (data: T) => void;
// let cb:Callback<string> = (params:string) => { console.log(params) }
// cb('123')

// type Pair<T> = [T, T];
// type Coordinates = Pair<number>;
// type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

//---不同点2---
// interface 可以而 type 不行
// interface 能够声明合并
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

//最终User
// interface User {
//   name: string
//   age: number
//   sex: string 
// }


let walter:User = {
    name:'kaka',
    age:25,
    sex:'男'
}