import { Router } from 'express'

import {
	symbolHttpMethodsKey,
	httpGet,
	httpPost,
} from './decorators/http-methods'
import { path, symbolPathKey } from './decorators/path'

class User {
	@httpGet
	@path('/user/login')
	login() {
		return 'user login'
	}

	@httpGet
	@path('/user/exit')
	exit() {
		return 'user logout!!!!'
	}

	/**
	 * 属性装饰器演示
	 * @param v1
	 */
	// @httpGet
	// @path('/validate')
	// @validateEmptyStr
	// valid(@required v1: string) {
	//   console.log(v1)
	//   return v1
	// }
}

export default (app: Router) => {
	let user = new User()
	for (let methodName in user) {
		let method = user[methodName]
		if (typeof method !== 'function') break
		// 得到注解的数据
		let httpMethod = Reflect.getMetadata(
			symbolHttpMethodsKey,
			user,
			methodName
		)
		let path = Reflect.getMetadata(symbolPathKey, user, methodName)

        // app.get('/', () => any)
        //在app实例挂载路由和对应的回调函数
		app[httpMethod](path, method)
	}
}
