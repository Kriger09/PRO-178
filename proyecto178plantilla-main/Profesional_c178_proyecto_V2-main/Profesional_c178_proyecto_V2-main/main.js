//Latitud y longitud para abrir el mapa
let latitude = 22.7868542, longitude = 88.3643296;

// Inicializando Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

//Crear el mapa con zoom 4
var map=new mapboxgl.Map({
	container:'map',
	style:"mapbox://styles/mapbox/streets-v11",
	center:[longitude.latitude],
	zoom: 4
})

//Agregar el control Geocoder
map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
);


//Variable para elegir la imagen amber desde main.html
var img1 = document.querySelector("#amber")
// Crea un marcador del Fuerte Amber en Jaipur y agrégalo al mapa.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);


//Variable para elegir la imagen gateway desde main.html
var img2=document.querySelector("#gateway")

// Crea un marcador de la Entrada de la India en Mumbai y agrégalo al mapa.
var mark2=new mapboxgl.Marker({
	element:img2
})
.setLngLat([18.922064,72.834641])
.addTo(map)

//Variable para elegir la imagen gate desde main.html
var img3=document.querySelector("#gate")
// Crea un marcador de la Puerta de la India y agrégalo al mapa.
var mark3=new mapboxgl.Marker({
	element:img3
})
.setLngLat([28.612863888889,77.229305555556])
.addTo(map)

//Variable para elegir la imagen lotus desde main.html
var img4=document.querySelector("#lotus")
// Crea un marcador en el Templo del Loto en Delhi y agrégalo al mapa.
var mark4=new mapboxgl.Marker({
	element:img4
})
.setLngLat([28.553558,77.259132])
.addTo(map)

//Variable para elegir la imagen victoria desde main.html
var img5=document.querySelector("#victoria")
//Crea un marcador del Victoria Memorial en Kolkata y agrégalo al mapa.

var mark5=new mapboxgl.Marker({
	element:img5
})
.setLngLat([22.5449,88.3425])
.addTo(map)