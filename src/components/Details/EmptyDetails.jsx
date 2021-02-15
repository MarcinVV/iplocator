import React from 'react';
import PropTypes from 'prop-types';

const EmptyDetails = ({title}) => {

    return (
        <div className="details">
            <span className="details-title" data-test="title">
            {title}
            </span>
            <div className="details-content">
                <div className="details-data">
                    <span data-test="noAddress">No address found</span>
                </div>
            </div>
        </div>
    );
};

EmptyDetails.propTypes = {
    title: PropTypes.string
};

export default EmptyDetails;
