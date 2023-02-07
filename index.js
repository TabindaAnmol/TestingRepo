const references=require('./References/reference.js')
const routes=require('./routers.js')
const exp=references.express();
const con=require('./Controller/controller.js')
exp.set('view engine','ejs')
exp.use(routes)


exp.listen(4000)
