let e=require("express")
let app=e()
let PORT=process.env.PORT||3000



app.use(e.static('/view/'))



app.get('/start',(req,res)=>{
    res.sendFile(__dirname+'/view/index.html')
})


app.listen(PORT)