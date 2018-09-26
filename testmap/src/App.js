 import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
 import { markers, mapConfig } from './component/util';
import React, { PureComponent } from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer,   ScaleControl } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';


Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';



class App extends PureComponent {
  showPopUpOfMarker(marker){
          console.log("Mouse over")

  }
  hidePopUpOfMarker(){
          console.log("Mouse out")

  }



  render() {
    // create an array with marker components
  const Markers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.name}`}      onMouseover={marker.name}
     onMouseout={this.hidePopUpOfMarker.bind(this)}>
        <Popup    >
   <div  >
     <img  style={{ width:'200px' ,height:'200px'  }} src="barn.jpg"/>
     <div  >
       <h1 style={{ fontSize: 20 }}> {marker.name}</h1>
     </div>
   <span><p>New York</p></span>
   </div>
        </Popup>
      </Marker>
    ));

    return (
      <div className="map">

     <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">

      <ScaleControl position="bottomright" />
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
           />
    {Markers}
        </Map>

       </div>
    );
  }
}

export default App;
