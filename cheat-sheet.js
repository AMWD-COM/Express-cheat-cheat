const person = {
    name: 'John Doe',
    age: 30
}
module.exports = person;

// the we can import it like this :

//const person = require('./person');


// we can also export classes here
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greeting(){
//         console.log(`My name is ${this.name} and I am ${this.age}`);
//     }
// }
// module.exports = Person;


// and the import it like this : function
// const Person = require('./person');
// const person1 = new Person('leila', 30);


// person1.greeting(); // My name is leila Doe and I am 30


/*
* keep in mind that nodejs doesn't support ES6 importing
*import Person from './person' ==> this is note possible in express or node js but
*but we can use it if we add something to our package.json file
*we add "type": "module" tha we can type import Express from "express" 
*or import person from "./person"
*/
//Express

// install express
const express = require('express');

//initialize express
const app = express();

//create your endpoint/ route handler
app.get('/', function(req,res){
    res.send('Hello world!');
});


//listen to a port

app.listen(5000);

//basic route handling

app.get('/', function(req,res){
    // fetch from database
    // load pages
    // return JSON
    // full access to request and response
})


//you can set up a port variable that takes either the server's port or a port of your choice if server doesn't have a port defined to it

const PORT = process.env.PORT || 5000;

app.listen(PORT);


//you can parse HTML in a response

app.get('/', (req,res) => {
    res.send('<h1> Hello world </h1>');
});


//to send a file

const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});


//in express, you can set up a static folder to host static content

app.use(express.static(path.join(__dirname,'public')));


//to return json

const members = {
    // a object that contains users with id/name/email
    // id: 1,
    // name: 'John Doe',
    // email: 'john@doe.com'
}
app.get('/api/members',(req,res) => {
    res.json(members);
});



// it will stringify the object in json format

// creating middleware (code that works behind the scene)

const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
 next();
}


// to use this middleware

app.use(logger);

//to use url parameters

app.get('/api/members/:id', (req,res)=> {
    res.send(req.params.id);
});

//to get a single member from that member's object we created before

app.get('/api/members/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found){
        res.json(member.filter(member => {
            member.id === parseInt(req.params.id)
        }))
    }
    else {
        res.status(400).json({msg: "member not found"});
    }
})