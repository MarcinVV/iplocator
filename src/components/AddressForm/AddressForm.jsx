import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {patternIp, patternUrl} from "../../helpers/checkInput"
import Notification from "../Notyficaton/Notification";
import {showNotyfication as show} from "../../helpers/showNotyfication";
import '../App/App.css';

const AddressForm = ({change}) => {
    const initLocation = {address: ''}
    const [location, setLocation] = useState(initLocation)
    const [showNotification, setShowNotification] = useState(false);
    const validateIP = new RegExp(patternIp);
    const validateUrl = new RegExp(patternUrl);

    const handleChange = e => {
        setLocation({
            address: e.target.value
        });
    };

    const handleSubmit = () => {
        if (!(validateIP.test(location.address) || validateUrl.test(location.address))) {
            show(setShowNotification);
        } else {
            change(location);
            setLocation(initLocation);
        }
    };

    return (
        <>
            <div className="row">
                <div className="col m9 s12">
                    <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="IP or URL"
                        value={location.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="col m3 s12">
                    <button
                        id="calculate-btn"
                        className="calculate-btn"
                        type="button"
                        disabled={location.address === ''}
                        onClick={handleSubmit}
                    >
                        Search
                    </button>
                </div>
                <div className="center">
                    {showNotification && <Notification/>}
                </div>
            </div>
        </>
    );
};

AddressForm.propTypes = {
    change: PropTypes.func.isRequired
};

export default AddressForm;
