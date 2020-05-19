class User {
    actionIndex(req,res){
        res.send('hello kaka');
        res.end()
    }

    actionList(req,res){
        res.send('hello list!');
        res.end()
    }
}

export default User