var jalan1a=new google.maps.LatLng(-7.819024,110.391997);
var jalan2a=new google.maps.LatLng(-7.818398,110.392161);
var jalan3a=new google.maps.LatLng(-7.818014,110.390697);
var jalan4a=new google.maps.LatLng(-7.813058,110.391986);
var jalan5a=new google.maps.LatLng(-7.812558,110.392174);
var jalan6a=new google.maps.LatLng(-7.811268,110.393020);
var jalan7a=new google.maps.LatLng(-7.810707,110.393080);
var jalan8a=new google.maps.LatLng(-7.809038,110.393059);
var jalan9a=new google.maps.LatLng(-7.807721,110.394372);
var jalan10a=new google.maps.LatLng(-7.805682,110.394660);
var jalan11a=new google.maps.LatLng(-7.802236,110.395181);
var jalan12a=new google.maps.LatLng(-7.802059,110.388237);
var jalan13a=new google.maps.LatLng(-7.801966,110.384181);
var jalan14a=new google.maps.LatLng(-7.797726,110.384945);
var jalan15a=new google.maps.LatLng(-7.797496,110.382463);
var jalan16a=new google.maps.LatLng(-7.796641,110.382761);
var jalan17a=new google.maps.LatLng(-7.796379,110.382761);
var jalan18a=new google.maps.LatLng(-7.794664,110.383336);
var jalan19a=new google.maps.LatLng(-7.794061,110.380587);
var jalan20a=new google.maps.LatLng(-7.794042,110.379152);
var jalan1=new google.maps.LatLng(-7.793962,110.377869);
var jalan2=new google.maps.LatLng(-7.792419,110.377888);
var jalan3=new google.maps.LatLng(-7.790822,110.377947);
var jalan4=new google.maps.LatLng(-7.789484,110.378268);
var jalan5=new google.maps.LatLng(-7.788236,110.378351);
var jalan6=new google.maps.LatLng(-7.788495,110.377162);
var jalan7=new google.maps.LatLng(-7.788613,110.376208);
var jalan8=new google.maps.LatLng(-7.788543,110.375537);
var jalan9=new google.maps.LatLng(-7.788308,110.374925);
var jalan10=new google.maps.LatLng(-7.787608,110.375267);
var jalan11=new google.maps.LatLng(-7.787336,110.375125);
var jalan12=new google.maps.LatLng(-7.787149,110.374755);
var jalan13=new google.maps.LatLng(-7.786878,110.374272);
var jalan14=new google.maps.LatLng(-7.783128,110.374857);
var jalan15=new google.maps.LatLng(-7.783050,110.372273);
var jalan16=new google.maps.LatLng(-7.780009,110.372976);
var jalan17=new google.maps.LatLng(-7.778172,110.373518);
var jalan18=new google.maps.LatLng(-7.776170,110.374333);
var jalan19=new google.maps.LatLng(-7.771743,110.376144);
var jalan20=new google.maps.LatLng(-7.767179,110.378030);
var jalan21=new google.maps.LatLng(-7.767068,110.377819);
var jalan22=new google.maps.LatLng(-7.766783,110.377195);

var poligon1r=new google.maps.LatLng(-7.819013,110.391920);
var poligon2r=new google.maps.LatLng(-7.819092,110.392377);
var poligon3r=new google.maps.LatLng(-7.820883,110.392050);
var poligon4r=new google.maps.LatLng(-7.820759,110.391530);

var poligon1=new google.maps.LatLng(-7.766034,110.378379);
var poligon2=new google.maps.LatLng(-7.767050,110.377970);
var poligon3=new google.maps.LatLng(-7.766595,110.376552);
var poligon4=new google.maps.LatLng(-7.766188,110.376694);
var poligon5=new google.maps.LatLng(-7.766298,110.377137);
var poligon6=new google.maps.LatLng(-7.765628,110.377388);
var Gedungpusat=new google.maps.LatLng(-7.768067,110.378524);
var marker;
var Rumah=new google.maps.LatLng( -7.820120,110.391799);
var marker;
var Geografi=new google.maps.LatLng( -7.766373,110.377528);
var marker;

function initialize() 
{
  var mapProp = {
    center:new google.maps.LatLng(-7.793962,110.377869),
    zoom:13,
    panControl:true,
    zoomControl:true,
    mapTypeControl:true,
    scaleControl:true,
    streetViewControl:true,
    overviewMapControl:true,
    rotateControl:true, 
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

var myTrip=[jalan1a,jalan2a,jalan3a,jalan4a,jalan5a,jalan6a,jalan7a,jalan8a,jalan9a,jalan10a,jalan11a,jalan12a,jalan13a,jalan14a,jalan15a,jalan16a,jalan17a,jalan18a,jalan19a,jalan20a,jalan1,jalan2,jalan3,jalan4,jalan5,jalan6,jalan7,jalan8,jalan9,jalan10,jalan11,jalan12,jalan13,jalan14,jalan15,jalan16,jalan17,jalan18,jalan19,jalan20,jalan21,jalan22];
var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });
flightPath.setMap(map);

var myTrip=[poligon1,poligon2,poligon3,poligon4,poligon5,poligon6];
var flightPath=new google.maps.Polygon({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });

flightPath.setMap(map);

var myTrip=[poligon1r,poligon2r,poligon3r,poligon4r];
var flightPath=new google.maps.Polygon({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });

flightPath.setMap(map);

var marker=new google.maps.Marker({
  position:Geografi,
  animation:google.maps.Animation.BOUNCE
  });

  marker.setMap(map); 
  
  var infowindow = new google.maps.InfoWindow({
  content:"Fakultas Geografi"
  });

infowindow.open(map,marker);

var marker=new google.maps.Marker({
  position:Rumah,
  animation:google.maps.Animation.BOUNCE
  });

  marker.setMap(map); 
  
  var infowindow = new google.maps.InfoWindow({
  content:"Gambiran"
  });

infowindow.open(map,marker);
  
marker.setMap(map);var marker=new google.maps.Marker({
  position:Gedungpusat,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);


var infowindow = new google.maps.InfoWindow({
  content:"Gedung Pusat UGM"
  });

infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);