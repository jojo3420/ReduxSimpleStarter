// import React from "react";
// import { GoogleMapLoader, GoogleMap } from "react-google-maps";
//
//
// export default (props) => {
//   const { lat, lon } = props;
//   debugger
//   return (
//     <GoogleMapLoader
//         containerElement={ <div style={{height: '100%'}} /> }
//         googleMapElement={
//           <GoogleMap defaultZoom={12} defaultCenter={{lat: lat, lng: lon}} />
//         }
//     />
//   );
// }
import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';


class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap;
