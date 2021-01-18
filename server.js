const express = require('express');
//using body-parser we can make use of the req.body object.
const bodyParser = require('body-parser');
// const request = require('request'); for url
const app = express()

const { calculate } = require("./businessLogic")

const PORT = process.env.PORT || 4001

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


app.get('/can-i-go-out', function (req, res) {
     let today   = new Date();
     let options = {
          weekday : "long",
          day     : "numeric",
          month   : "long"
};
     let dayDate = today.toLocaleDateString( "tr-TR", options );
          res.render( 'index', { dayDate : dayDate });

});


app.post('/can-i-go-out', function (req, res) {
     let age   =  Number( req.body.yas );
     calculate(res,age)
     
});

app.listen( PORT , console.log( `Server started on port ${ PORT }` ) );


module.exports={
     app
} 

// app.listen(3030, function () {
//     console.log('Example app listening on port 3030!')
// })
