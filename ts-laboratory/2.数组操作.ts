let array : number[] = [1,2,3];
let array2 :Array<number> = [1,2,3,4];

//使用接口
interface Student {
    name:string,
    age:number
}

let student:Array<Student> = [
    {
        name:'kaka',
        age:0
    }
]

//可索引类型
interface Tree {
    [index:number]:string
}

let tree:Tree;

tree = ['1','2']



interface Square {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface AllType extends Square,PenStroke {
    color:string
}

let allType:AllType = {
    color:'red',
    penWidth:100
}


//函数类型

interface FunctionType {
    (name:string,age:number): object
}

let getPerson:FunctionType = function(name:string,age:number):object {
    return {
        name:'kaka',
        age:25
    }
}

//类 实现接口

interface Apple {
    getApple(n:number): number
}

class Friute implements Apple {
    getApple(n:number):number {
        return n
    }
}