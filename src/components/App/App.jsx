import React, {useState, useEffect} from 'react';
import {getData, storeData} from '../../helpers/localStorage';
import {useFetchData} from "../../helpers/fetchData";
import {v4 as uuidv4} from 'uuid';
import AddressForm from '../AddressForm/AddressForm';
import Info from '../Info/Info';
import DetailsForm from "../DetailsForm/DetailsForm";

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
    const initialPosition = {
        value: "www.rmf.fm",
        latitude: 50.07072067260742,
        longitude: 19.93099021911621
    }
    const initialState = () => getData('data') || [];
    const [state, setState] = useState(initialState);
    const [previous, setPrevious] = useState();
    const [current, setCurrent] = useState();
    const [position, setPosition] = useState(initialPosition);
    const [{ret, isLoading, isError}, doFetch] = useFetchData();

    useEffect(() => {
        storeData('data', state);
        setCurrent(state[state.length - 1]);
        if (state.length > 1) setPrevious(state[state.length - 2]);
        else setPrevious(null);
    }, [state]);

    useEffect(() => {
        setPosition({
            ...position,
            ...ret
        })
        const newPoint = {...position, ...ret}
        if (position.id !== undefined) {
            let newVal = [...state, newPoint];
            const len = newVal.length;
            if (len > 9) newVal = newVal.slice(1, len);
            setState(newVal);
        }
        // eslint-disable-next-line
    }, [ret]);

    const handleAddress = val => {
        val.id = uuidv4();
        doFetch(val);
        setPosition(val)
    };

    const handleDelete = id => {
        storeData('lastState', state);
        let newState = state.filter(i => {
            return i.id !== id;
        });
        setState(newState);
    };

    const handleUndo = () => {
        setState(getData('lastState'));
    };

    return (
        <div className='container'>
            <div className='row center'>
                {isLoading && <label>Loading...</label>}
                {isError && <label>Connection to external server was failed!</label>}
            </div>
            <div className='row'>
                <div className='col m4 s12'>
                    <div className='data-container row'>
                        {state.length > 0 ? (
                            <>
                                {state.map(info => (
                                    <Info
                                        id={info.id}
                                        key={info.id}
                                        address={info.address}
                                        deleteCard={handleDelete}
                                    />
                                ))}
                            </>
                        ) : (
                            <div className='center white-text'>No address found</div>
                        )}
                    </div>
                    {getData('lastState') !== null ? (
                        <div className='center'>
                            <button className='calculate-btn' onClick={handleUndo}>
                                Undo
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className='col m8 s12'>
                    <div className='row center'>
                        <DetailsForm state={current} title={'Current'}/>
                    </div>
                    <AddressForm change={handleAddress}/>
                    <div className='row center'>
                        <DetailsForm state={previous} title={'Previous'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
