const express = require('express')
const app = express();

app.listen(3000, () => console.log("kuuntelen"));

app.use(express.static("public"));
app.use(express.json({limit: 'lmb'}));

const paikat = [
  {
    "paikka": "Helsinki",
    "arvostelu": "kiva oli",
    "longitude": "24.8953588",
    "latitude": "60.19617590000001"
  },
  {
    "paikka": "levi",
    "arvostelu": "Ei niin kivaa ollut",
    "longitude": "24.8082",
    "latitude": "67.8840"
  }
]

app.get('/api/paikat', function(reguest, response) {
  response.send(paikat);
})

app.post('/api/arvostelu', function(reguest, response) {
  console.log("Käyttäjä arvostelu");
  console.log(reguest.body);
  response.send(200);
})
