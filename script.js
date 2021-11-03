mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pcmd1bmRlbSIsImEiOiJja3ZpNWV6ZG04OTN5Mm5zNzhzZ2pveGNpIn0.9D2j_DpskRqbZL1NA3MQUg';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true});


function successLocation(position){
    setupMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation(){
    setupMap([41.015137, 28.979530])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center : center,
        zoom : 9,
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');
    
}

