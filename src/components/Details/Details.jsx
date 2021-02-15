import React from 'react';
import PropTypes from 'prop-types';

const Details = ({address, title, country_name, city, region_name, ip, latitude, longitude}) => {

    return (
        <>
            <div className="details">
                <span className="details-title">
                {title}
                </span>
                <div className="details-content">
                    <div className="details-data">
                        <span className='details-row' data-test='address'>address: {address}</span>
                        <span className='details-row' data-test='country'>country: {country_name}</span>
                        <span className='details-row' data-test='city'>city: {city}</span>
                        <span className='details-row' data-test='region'>region: {region_name}</span>
                        <span className='details-row' data-test='ip'>ip: {ip}</span>
                        <span className='details-row' data-test='latitude'>latitude: {latitude}</span>
                        <span className='details-row' data-test='longitude'>longitude: {longitude}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

Details.propTypes = {
    address: PropTypes.string,
    title: PropTypes.string,
    country_name: PropTypes.string,
    city: PropTypes.string,
    region_name: PropTypes.string,
    ip: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number
};

export default Details;
