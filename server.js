const express=require('express');
const app=express();
const port =3001

const path = require('path');


const bodyParser=require('body-parser'); 
// parse application/json 
app.use(bodyParser.json());  



// app.get('/',(req,res)=>{
// //    res.send("hello")
//     res.send(req.body)
// })
// app.post('post',(req,res)=>{
//     console.log(req.body);
//     res.json(req.body);
// });
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     // res.send('<h1> Hello world </h1>');
// });



const members = {
    // a object that contains users with id/name/email
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com'
}
app.get('/',(req,res) => {
    res.json(members);
});


app.listen(port)