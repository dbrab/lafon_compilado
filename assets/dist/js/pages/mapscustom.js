  var map;

  function initialize() {
    var myLatlng = new google.maps.LatLng(4.667472,-74.1537667);
    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('markermap'), mapOptions);
  console.log(map);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hola!',
        label:'P'
    });
    
    var contentString = '<div class="info-window-content"><h2>Rolavsp</h2>'+
                          '<h3>Desarrollo de Software</h3>'+
                        '<p>315 519 42 34 <br> administracion@rolavsp.com</p></div>';
                        
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);
  
  
    initialize();
 