// function initMap() {
var center = { lat: 47.1, lng: 5.0415 };

var locations = [
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/K5bygvMH7EKt4ow47"><strong>Directions</strong></a>',
    47.02077258800031,
    4.858557899991428,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/DULD3NKT7sS2KToJ8"><strong>Directions</strong></a>',
    46.71638600800835,
    4.704591376432046,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/2M1VkGpdpoEnw9kw7"><strong>Directions</strong></a>',
    46.907143775339335,
    4.763360475277228,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/viQLFMakCk5h2sAKA"><strong>Directions</strong></a>',
    46.4223160356354,
    4.664652110867784,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/cMT5ppFvH6iSb1Bg8"><strong>Directions</strong></a>',
    46.634345031705834,
    5.215324538552025,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/bdENqbJCEjBDxWA37"><strong>Directions</strong></a>',
    46.471913849732566,
    4.814849950020823,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/TyvL7EwwiYRiswsn7"><strong>Directions</strong></a>',
    46.88179125149243,
    5.261194698530737,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/Xo9rjjkqJMQ18cZz6"><strong>Directions</strong></a>',
    46.611480500140125,
    4.661979393181033,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/NwL1tiQgZ39UfXPM8"><strong>Directions</strong></a>',
    46.77873303012657,
    4.894398976158901,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/26KSK5t6i9bfJn7G9"><strong>Directions</strong></a>',
    46.98957557570561,
    5.147817423948909,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/R3oXNBiDukWGE11y6"><strong>Directions</strong></a>',
    46.57382263840207,
    4.9041554773331475,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/V9QMb6dqasHzuG7R8"><strong>Directions</strong></a>',
    46.89202526058164,
    5.024420042527538,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/9jFc1AUwDmgYatCx6"><strong>Directions</strong></a>',
    47.13214262526884,
    4.480268057429736,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/nELE6hT6BFT3aetU9"><strong>Directions</strong></a>',
    47.191016075715645,
    5.391865809303903,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/oxTx6izQKU28hs226"><strong>Directions</strong></a>',
    47.517271153056235,
    5.126430778942296,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/aksSwWkoyjEPDnHt9"><strong>Directions</strong></a>',
    47.39249114911433,
    5.309951858128746,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/N3ZH38DAV9avzBqx6"><strong>Directions</strong></a>',
    47.62370375121655,
    4.321209563480839,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/EH2QoDPtiUoTtSwZ9"><strong>Directions</strong></a>',
    47.13313244814133,
    4.9663238666879295,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/sTRQDwBhQA2X8YFN6"><strong>Directions</strong></a>',
    47.26927285748006,
    4.540776751001361,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/rXJC4JadhWb3cgye9"><strong>Directions</strong></a>',
    47.28037913031997,
    4.236449980882921,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/2AJAJR2WGKbAr5TA7"><strong>Directions</strong></a>',
    47.48505777195856,
    4.341942326741403,
  ],
  [
    'Gamm Vert<br/>\
      <a href="https://goo.gl/maps/j45u4x1iPYsY1Z6A7"><strong>Directions</strong></a>',
    47.39574182733932,
    4.547076796649123,
  ],
  [
    'La Ferme de Bray<br/>\
      <a href="https://g.page/la-ferme-de-bray-21000-dijon?share"><strong>Directions</strong></a>',
    47.291286807687975,
    5.085297522757097,
  ],
  [
    'L’épicerie de Virginie<br/>\
      <a href="https://goo.gl/maps/KkvL9ghg4e9srZvP9"><strong>Directions</strong></a>',
    47.25292402320799,
    5.085142905681823,
  ],
  [
    'Les saveurs de nos fermes<br/>\
      <a href="https://goo.gl/maps/tTt6H3EmNmmpJPTc8"><strong>Directions</strong></a>',
    47.302951989864575,
    5.113963991105861,
  ],
];

var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 8,
  center: center,
  streetViewControl: false,
  mapTypeControl: false,
});
var infowindow = new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[count][1], locations[count][2]),
    map: map,
    title: locations[count][0],
  });
  google.maps.event.addListener(
    marker,
    "click",
    (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      };
    })(marker, count)
  );
}
// }
// var a = new google.maps.LatLng(47.3427025, 5.1839756),
//   b = document.querySelector("#map"),
//   c = {
//     center: a,
//     zoom: 9,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     streetViewControl: false,
//     mapTypeControl: false,
//     // scrollwheel: ,
//     // disableDefaultUI: !0,
//     // draggable: !1,
//   };
// map = new google.maps.Map(b, c);
// new google.maps.Marker({ position: a, map: map });
// new google.maps.Marker({ position: new google.maps.LatLng(44.3427025, 4.1839756), map: map });
// new google.maps.Marker({ position: new google.maps.LatLng(44.3427025, 4.1839756), map: map });
// // new google.maps.Marker({ position: a, map: map, title: "Hello World!" });
