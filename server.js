const express = require('express');
//using body-parser we can make use of the req.body object.
const bodyParser = require('body-parser');
// const request = require('request'); for url
const app = express()

const PORT = process.env.PORT || 4000

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')


app.get('/', function (req, res) {
     var today   = new Date();
     var options = {
          weekday : "long",
          day     : "numeric",
          month   : "long"
};

var dayDate = today.toLocaleDateString( "tr-TR", options );
    res.render( 'index', { dayDate : dayDate });

})



app.post('/', function (req, res) {
     let yas    =  Number(req.body.yas);
     let tarih  =  new Date();
     let gun    =  tarih.getDay();
     let saat   =  tarih.getHours();
     let dakika =  tarih.getMinutes();
     let saniye =  tarih.getSeconds();	
     let day    =  "";
     console.log(yas)
     console.log(gun)
          
          if( yas !== Number(yas) || yas <0 ){
               day = ' Lütfen yaşınızı doğru girdiğinizden emin olun :)';

          }
          else if ( gun == 0 || gun == 6 ){
               day ='Hafta Sonu Dışarıya Çıkamazsınız ';
          }
                         
          else if ( yas > 65 ){
               day = `Yaşınız ${ yas } olduğu için sadece saat 10 ile 13.00 arası dışarı çıkabilirsiniz.`;
                  
          }
               
          else if ( yas<20 ){
               day = `Yaşınız ${ yas } olduğu için saat 13.00 ile 16.00 arasi dışarı çıkabilirsiniz.`;
          }
               
          else if ( ( yas >20 && yas <65 ) && ( saat > 10 && saat < 21 ) ){
               day = `Dışarıya Çıkabilirsiniz`;
          }
               
          else if ( (yas > 20 && yas < 65 ) && (saat < 10 || saat > 21) ){
               day = `Dışarıya saat  ${saat}:${dakika}:${saniye} olduğu için çıkamazsınız.` ;
          }
            
          res.render( "about" , { kindofDay : day } );

});





app.listen( PORT, console.log( `Server started on port ${ PORT }` ) )



// app.listen(3030, function () {
//     console.log('Example app listening on port 3030!')
// })
