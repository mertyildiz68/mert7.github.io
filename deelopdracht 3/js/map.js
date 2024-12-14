
let map = L.map('apMap').setView([51.22516, 4.42191], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.22538, 4.42110], [51.22494, 4.42210]];

let apMarker = L.marker([51.22516, 4.42191]).addTo(map);
apMarker.bindPopup("<b>Gasthuishoevestraat 80</b><br>Antwerp, Belgium").openPopup();
