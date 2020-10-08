var latitude = 0;
var longitude = 0;
var kartta;

async function getData() {
  const response = await fetch('api/paikat');
  const data = await response.json();
  console.log("Function getdata tiedot: ", data)
}

if ("geolocation" in navigator) {
  console.log("Sijaintitieto saatavilla");
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    console.log("latitude: " + latitude);
    console.log("longitude: " + longitude);

    document.getElementById("leveysasteet").innerHTML = latitude
    document.getElementById("pituusasteet").innerHTML = longitude

    kartta =  L.map('kartta').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(kartta);

    var marker = L.marker([latitude, longitude]). addTo(kartta);
    getData();
  });

} else {
  console.log("Sijantitieto ei saatavilla");
}

function avaa_paikkatietolomake() {
  documents.getElementById("paikkatietolomake").style.display = "block";
  documents.getElementById("lomake").reset();
}

function sulje_paikkatietolomake() {
  documents.getElementById("paikkatietolomake").style.display = "none";
}

function laheta_arvostelu() {
  var paikka = documents.getElementById("paikka").value;
  var arvostelu = documents.getElementById("arvostelu").value;

  console.log("piakka: " + paikka);
  console.log("arvostelu: " + arvostelu)
}
