class Map{

    constructor(){

    const mymap = L.map('carte').setView([49.033, 2.0667], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 50,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidHVmYWlzY2hpZXIiLCJhIjoiY2p4YXFkMjIxMDc4djN0bWIzbGdncXZsZSJ9.ovqP6PZTilgzMO6N3ZBXZg'

    }).addTo(mymap);
    return mymap
}
}