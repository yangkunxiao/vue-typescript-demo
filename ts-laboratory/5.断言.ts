function add(something: string | number): void {
	// 可以使用类型断言，将 something 断言成 string
	if ((<string>something).length) {
		console.log((<string>something).length)
	} else {
		console.log(something.toString().length)
	}
}

//使用as 进行推断
function sum(something: string | number): void {
	if ((something as string).length) {
		console.log((something as string).length)
	} else {
		console.log(something.toString().length)
	}
}

add('12')
sum(12)

//如果联合属性太复杂 可以给类型起个别名
// 使用 type 创建类型别名,类型别名常用于联合类型

type Name = string
type NameResolver = () => string
type NameOrAge = Name | NameResolver

function getName(name: NameOrAge): string {
	if (typeof name === 'string') {
		return name
	} else {
		return name()
	}
}
