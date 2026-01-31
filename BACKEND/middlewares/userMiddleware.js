const reqBodyHandler = (req, res, next) => {
    if(req.body?.userId) req.userId = req.body.userId
    if(req.body?.email) req.email = req.body.email
    // console.log(req.body ,"request body updated")
    next();
}

export {reqBodyHandler} 