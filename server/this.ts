/* type Point = {
	x: number
	y: number
	move(x: number, y: number): number
}

let p: Point = {
	x: 10,
	y: 20,
	//如果使用箭头函数 则报错
	move: function (x: number, y: number): number {
        // this has type Point
		console.log(this.x, this.y)
		return this.x + this.y
	},
}

console.log(p.move(1, 2))


 */

/*  class Test {
     name:string;
     constructor(name:string){
         this.name = name
     }
     fn():void{
         console.log(this.name)
     }
 }

 let test = new Test('kaka');

test.fn() */


// let num:number = 20;

// function fn(that:typeof globalThis){
//     console.log(that.num)
// }

// fn(this);

var num = 20;
function fn(that: typeof globalThis){
    return that.num;
}
fn(this);