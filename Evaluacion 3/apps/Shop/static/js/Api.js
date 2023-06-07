function clima(latitud, longitud) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ latitud + "&lon=" + longitud+ "&appid=aed3791b16284825a459c2dd30421d4d")
    .then(response =>  response.json())
    .then(data => {
        console.log(data);
        let ubicacion = document.getElementById("ubicacion");
        ubicacion.innerHTML += "Ubicacion: " + data.name;

        let temperatura = document.getElementById("temperatura");
        let kelvin = 273.15;
        let celsius= data.main.temp - kelvin;
        temperatura.innerHTML = "temperatura: " + Math.trunc(celsius) + "°"
    })
}

function ubi() {
    navigator.geolocation.getCurrentPosition(function(position){

        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;

        console.log(latitud, longitud);
        clima(latitud, longitud);
    })
}