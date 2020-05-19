import * as express from 'express';
import router from './router'
// import constroller from './constroller'

const app = express();

// constroller(app)
router(app)

app.listen(3000,() => {
    console.log('Example app listening at http://localhost:3000')
})