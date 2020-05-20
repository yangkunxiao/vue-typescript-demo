import * as express from 'express';
import { Response,Request } from 'express'
 // import router from './router'
// import constroller from './constroller'

const app = express();

// constroller(app)
// router(app)

//传统的路由方式
app.get('/',(req:Request,res:Response) => {
    res.send('首页')
})

app.get('/user',(req:Request,res:Response) => {
    res.send('我的')
})

app.listen(3000,() => {
    console.log('Example app listening at http://localhost:3000')
})