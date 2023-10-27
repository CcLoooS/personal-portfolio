function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 43.59372366534265, lng: -79.6349464298716};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mississauga, Ontario' // Title Location
    });
}