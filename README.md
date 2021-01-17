- npm init
- npm install --save express
- npm install ejs --save

```
But instead of just responding with the same html template, lets access the name of the
city the user typed in as well. For this we need to use an Express Middleware.
```
```
We’re going to make use of the body-parser middleware. body-parser allows us to make use 
of the key-value pairs stored on the req-body object. In this case, we’ll be able to access the
city name the user typed in on the client side.
```
- npm install body-parser --save
- npm install request --save
- npm i -D nodemon
   -  "dev": "nodemon server.js"
   
   
 [Siteye buradan ulasabilirsiniz](https://x1p16.sse.codesandbox.io/)
