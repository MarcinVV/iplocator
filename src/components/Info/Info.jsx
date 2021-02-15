import React from 'react';
import PropTypes from 'prop-types';

const Info = ({address, id, deleteCard}) => {
    const handleDelete = () => {
        deleteCard(id);
    };

    return (
        <div className="col m12 s12">
            <div className="card">
                <div className="card-content">
                    <div className="card-data">
                        <span data-test="address">address: {address}</span>
                    </div>
                    <button className="delete-btn" onClick={handleDelete}>
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

Info.propTypes = {
    address: PropTypes.string,
    id: PropTypes.string,
    deleteCard: PropTypes.func
};

export default Info;
