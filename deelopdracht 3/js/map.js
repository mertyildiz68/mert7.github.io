
let map = L.map('apMap').setView([51.22516, 4.42191], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.2379014,4.4391804], [51.2379014,4.4391804]];

let apMarker = L.marker([51.2379014,4.4391804]).addTo(map);
apMarker.bindPopup("<b>Gasthuishoevestraat 80</b><br>Antwerp, Belgium").openPopup();
