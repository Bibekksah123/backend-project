const express=require('express')
const app=express()
const category=[{
  id:1,
  name:'web'
},{
  id:2,
  name:'mobile'
},{
  id:3,
  name:'photography'
}]
app.get('/',(req,res)=>{
  res.render(category)
})
app.listen(3400)