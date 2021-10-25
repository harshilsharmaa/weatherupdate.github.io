mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hpbHNoYXJtYWEiLCJhIjoiY2t2NDIxNWdhMjliZjJwcXd2ZnhoY3NrbCJ9.UvG-SJptZUXPI0CqmlE9Tg';
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center: [0, 0],
zoom: 2
});

let latitude;
let longitude;

 
const marker = new mapboxgl.Marker({
draggable: true
})
.setLngLat([0, 0])
.addTo(map);
 
function onDragEnd() {
const lngLat = marker.getLngLat();
// console.log(lngLat);

latitude = lngLat.lat;
longitude = lngLat.lng;

coordinates.style.display = 'block';
coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
// console.log(lngLat.lat, longitude);
localStorage.setItem('longitude',longitude);
localStorage.setItem('latitude',latitude);
// localStorage.setItem("lastname", "Smith");
// let a = localStorage.getItem("lastname");
// console.log(a);
}
 
marker.on('dragend', onDragEnd);
// console.log(latitude, longitude);


