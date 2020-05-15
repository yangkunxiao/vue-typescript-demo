let isDone: boolean = true
let myName: string = 'kaka'
let decLiteral: number = 10
let hexLiteral: number = 0x1000

function foo(): void {
	console.log('我没有返回值')
}

//声明一个void类型 只能将它只为undefined null
const unusable: void = undefined
//没有类型声明 ts会进行类型推导
const myAge = 25
//等价于
const myAge2: number = 25

//联合类型
function bar(somethine: string | object): string {
	return somethine.toString()
}

//interface 定义接口
interface Person {
	name: string
	age?: number
	readonly idCard: string
	[propName: string]: any //任意属性
}

let kaka: Person = {
	name: 'kaka',
	idCard: '1234565',
	age: 25,
	firstName: 'yang',
}

//枚举
enum Days {
	Sun,
	Mon,
	Tue,
	Wed,
	Thu,
	Fri,
	Sat,
}

// console.log(Days[0]);
// console.log(Days['Sun']);


enum Days2 {
    Sun = 2,
	Mon = 5,
	Tue,
	Wed,
	Thu,
	Fri,
	Sat,
}
console.log(Days2['Sun']);
console.log(Days2['Mon']);
console.log(Days2['Tue']);