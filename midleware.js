const express = require('express')
const app = express()




// app.use(authorizeUsersAccess)


app.get('/', (req, res) => {
  res.send('Home Page')
})
// //app.get('/users', authorizeUsersAccess, (req, res) => {
app.get('/users', (req, res) => {
  res.send('Users Page')
})

// function loggingMiddleware(req, res, next) {
//   console.log('Inside Middleware')
//   console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
//   next()
// }




//Advenced 
// function authorizeUsersAccess(req, res, next) {
//     console.log('authorizeUsersAccess Middleware')
//     next()
//   }


//Exemple 2 
function authorizeUsersAccess(req, res, next) {
    if (req.query.admin === 'true') {
      next()
    } else {
      res.send('ERROR: You must be an admin')
    }
  }



//Mideleware will execute in order

app.use(middlewareThree)
app.use(middlewareOne)

app.get('/', middlewareTwo, middlewareFour, (req, res) => {
  console.log('Inside Home Page')
  res.send('Home Page')
})

function middlewareOne(req, res, next) {
    console.log('Middleware One')
    next()
  }
  
  function middlewareTwo(req, res, next) {
    console.log('Middleware Two')
     next()
  }

  
  function middlewareThree(req, res, next) {
    console.log('Middleware Three')
    next()
  }
  
  function middlewareFour(req, res, next) {
    console.log('Middleware Four')
    next()
  }

/** 
* * Conclusion
* ? That is all there is to know about middleware. Middleware is incredibly powerful 
* ? for cleaning up code and making things like user authorization and authentication 
* ? much easier, but it can be used for so much 
* ? more than just that because of the incredible flexibility of middleware.
*/

app.listen(3000, () => console.log('Server Started'))