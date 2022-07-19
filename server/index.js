const express=require('express')
const app=express()
const PORT=process.env.PORT || 5000;
const cors=require('cors')

// middleWares 
app.use(express.json())
app.use(cors());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//Routes 
app.use("/",require("./Routes/route"))

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
    require("./models/conn")
})
