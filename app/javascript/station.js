document.addEventListener("DOMContentLoaded", function() {
  
   //console.log(stations); //Gelen verinin kontrolü.
   
  var map = L.map('map').setView([41.0356, 29.0132], 13); //Leaflet kütüphanesi ile harita oluşturulup başlangıç konumunun belirlenmesi.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //Leaflet kütüphanesi ile tile katmanının eklenmesi. 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  stations.forEach(function(station) { //İstasyonların harita üstünde gösterilmesi için gerekli verilerin hazırlanması. 
    if (station.AddressInfo && station.AddressInfo.Latitude && station.AddressInfo.Longitude) {
      var lat = station.AddressInfo.Latitude;
      var lon = station.AddressInfo.Longitude;
      var title = station.AddressInfo.Title || 'Bilinmeyen İstasyon';

      L.marker([lat, lon]) //İstasyonların harita üstünde gösterilmesi.
        .addTo(map)
        .bindPopup(`<b>${title}</b><br>${station.AddressInfo.Address || 'Adres mevcut değil'}`);
    }
  });
});

