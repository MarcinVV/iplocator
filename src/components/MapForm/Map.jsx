import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map = ({uluru}) => {
    const mapStyles = {
        height: "45vh"
    };
    return (
        <LoadScript
            id="script-loader"
            googleMapsApiKey='AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk'
            libraries={["places"]}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={uluru}
            >
                <Marker position={uluru}/>

            </GoogleMap>

        </LoadScript>
    )
};

export default Map;
