
function calculate( res, age ){

      let dayText   =  "";
      let date      =  new Date();
      let day       =  date.getDay();
      let hour     =  date.getHours();
      let minute    =  date.getMinutes();
      let second    =  date.getSeconds();	


      if ( age !== Number(age) || age < 0 ){
              dayText = ' Lütfen yaşınızı doğru girdiğinizden emin olun :)';
      }
      else if ( day == 0 || day == 6 ){
              dayText ='Hafta Sonu Dışarıya Çıkamazsınız ';
      }
                        
      else if ( age > 65 ){
              dayText = `Yaşınız ${ age } olduğu için sadece saat 10 ile 13.00 arası dışarı çıkabilirsiniz.`;
                 
      }
              
      else if ( age < 20 ){
              dayText = `Yaşınız ${ age } olduğu için saat 13.00 ile 16.00 arasi dışarı çıkabilirsiniz.`;
      }
              
      else if ( ( age >20 && age <65 ) && ( hour > 10 &&  hour < 21 ) ){
              dayText = `Dışarıya Çıkabilirsiniz`;
      }
              
      else if ( (age > 20 && age < 65 ) && (hour < 10 || hour > 21) ){
              dayText = `Dışarıya saat  ${hour}:${minute}:${second} olduğu için çıkamazsınız.` ;
      }
        
      res.render( "about" , { kindofDay : dayText }  );
     
      }
 

      module.exports={
            calculate
     
      }


