var locations = [];

async function getData() {
  const csv = await fetch("locations.csv");
  const data = await csv.text();

  const table = data.split("\n").slice(1);
  for (var i = 0; i < table.length; i++) {
    const columns = table[i].split(",");
    locations.push([
      columns[0] + '<br><a href="' + columns[3] + '"><strong>Directions</strong></a>',
      columns[1],
      columns[2],
    ]);
  }
}

function initMap() {
  var center = { lat: 47.1, lng: 5.0415 };

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
}

getData().then(initMap);
