let e=require("express")
let app=e()



app.use(e.static('/view/'))



app.get('/start',(req,res)=>{
    res.sendFile(__dirname+'/view/index.html')
})


app.listen(3000)