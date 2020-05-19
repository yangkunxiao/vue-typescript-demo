import User from './user';

export default function (router){
    router.get('/',new User().actionIndex);
    router.get('/list',new User().actionList);
}