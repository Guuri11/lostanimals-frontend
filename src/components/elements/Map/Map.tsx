import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { credential } from '../../../utils/mapsCredential';
import { useAppContext } from '../../../hooks/AppContext';
import { PostType } from '../../../utils/types/post';

const containerStyle = {
  width: '100%',
  height: '300px',
};

type Props = {
    posts: Array<PostType>
}

export function Map({ posts }: Props): JSX.Element {
  const { coords } = useAppContext();
  const [show, setShow] = useState(false);

  return (
    <LoadScript
      googleMapsApiKey={credential}
      loadingElement={<div>Loading map...</div>}
      onLoad={() => setShow(true)}
    >
      {
        show && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: coords.latitude, lng: coords.longitude }}
            zoom={13}
          >
            {google && posts.length > 0 && posts.map((post) => (
              <Marker key={post['@id']} position={new google.maps.LatLng(post.latitude, post.longitude)} />
            ))}
          </GoogleMap>
        )
        }
    </LoadScript>
  );
}
