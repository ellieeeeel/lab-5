function getGeolocation() {
    var geoDisplay = document.getElementById("geolocation");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        geoDisplay.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    var geoDisplay = document.getElementById("geolocation");
    geoDisplay.innerHTML = "Latitude: " + position.coords.latitude + 
                           "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}