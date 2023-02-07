const references=require('./References/reference.js')
const routes=require('./routers.js')
console.log("heyyyyyyyyyyyyyyyyy")
const exp=references.express();
const con=require('./Controller/controller.js')
exp.set('view engine','ejs')
exp.use(routes)


exp.listen(4000)
