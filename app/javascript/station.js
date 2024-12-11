
document.addEventListener("DOMContentLoaded", function() {
  
   //console.log(stations); // Veriyi kontrol etmek için
   
  var map = L.map('map').setView([41.0082, 28.9784], 12); 

  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  stations.forEach(function(station) {
    if (station.AddressInfo && station.AddressInfo.Latitude && station.AddressInfo.Longitude) {
      var lat = station.AddressInfo.Latitude;
      var lon = station.AddressInfo.Longitude;
      var title = station.AddressInfo.Title || 'Bilinmeyen İstasyon';

      
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`<b>${title}</b><br>${station.AddressInfo.Address || 'Adres mevcut değil'}`);
    }
  });
});

