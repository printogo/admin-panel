import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

export const GoogleMap = ({
  zoom,
  address: { description, lat, lng },
}) => {
  const [map, setMap] = useState();
  const [maps, setMaps] = useState();
  const [marker, setMarker] = useState();
  // Update marker
  useEffect(() => {
    setMarker(null);
    renderMarkers(map, maps);
  }, [lat, lng]);
  const renderMarkers = (map, maps) => {
    if (maps) {
      setMarker(
        new maps.Marker({
          position: { lat, lng },
          map,
          title: description,
        })
      );
    }
  };
  return (
    <div className="shadow-xl">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBdu71czR6Bbnl6useWaaS-SUIpdm0PDvE' }}
        center={{ lat, lng }}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => {
          setMap(map);
          setMaps(maps);
          renderMarkers(map, maps);
        }}
        yesIWantToUseGoogleMapApiInternals={true}
      ></GoogleMapReact>
    </div>
  );
};
