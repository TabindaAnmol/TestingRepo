const controller=require('./Controller/controller.js')
const references=require('./References/reference.js')
const exp=references.express.Router();
const bodyParser = require('body-parser');
exp.use(bodyParser.urlencoded());
exp.get('/',async(req,res)=>{
    const data=await controller.readDb();
    const userRecord="";
    res.render(`login`,{data:data,userRecord:userRecord})
})
exp.post('/',async(req,res)=>{
    const userData=req.body
    const dta=await controller.readDb();
    const userRecord="";
    var check="";
    dta.map((item)=>{
        if(item.email==userData.email){
        check=true;
        }
    })
    if(check){
        await controller.updateDb(userData.email,userData) 
    }
    else if(check==""){
        await controller.insertDb(userData)
    }
    const data=await controller.readDb();
    res.render('login',{data:data,userRecord:userRecord})
})
exp.get('/delete',async(req,res)=>{
    const dEmail=req.query.delEmail;
    await controller.deleteDb(dEmail)
    const data=await controller.readDb();
    const userRecord="";
    res.render('login',{data:data,userRecord:userRecord})
})
exp.get('/update',async(req,res)=>{
    const updated_Email=req.query.uEmail
    const userRecord=await controller.readOneDbRecord(updated_Email)
    const data=await controller.readDb();
    res.render(`login`,{data:data,userRecord:userRecord})

})
exp.get('*',(req,res)=>{
    res.render('page404')
})


    module.exports=exp;

