import React from 'react';
import Map from "../MapForm/Map";
import Details from "../Details/Details";
import EmptyDetails from "../Details/EmptyDetails";

const DetailsForm = ({state, title}) => {
    return (
        <>
            <div className='col m6 s12'>
                {state ? <Map data-test='dataMap' uluru={{lat: state.latitude, lng: state.longitude}}/> :
                    <Map data-test='emptyMap' uluru={{lat: 0, lng: 0}}/>}
            </div>
            <div className='col m6 s12'>
                {state ?
                    <Details
                        data-test='dataDetails'
                        title={title}
                        address={state.address}
                        country_name={state.country_name}
                        longitude={state.longitude}
                        latitude={state.latitude}
                        city={state.city}
                        region_name={state.region_name}
                        ip={state.ip}
                    /> :
                    <EmptyDetails data-test='emptyDetails' title={title}/>}
            </div>
        </>
    );
};


export default DetailsForm;
