const express = require('express');
//using body-parser we can make use of the req.body object.
const bodyParser = require('body-parser');
const app = express();
const { message } = require('./message');

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/can-i-go-out', function (req, res) {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const dayDate = today.toLocaleDateString("tr-TR", options);
  res.render('index', { dayDate: dayDate });

});


app.post('/can-i-go-out', function (req, res) {
  const age = Number(req.body.yas);
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const dayText = message(age, day, hour);

  res.render("about", { kindOfDay: dayText });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = {
  app
}
