import {useState, useEffect} from 'react';
import {useStateIfMounted} from 'use-state-if-mounted';
import axios from 'axios';

export const useFetchData = () => {
    const [ret, setRet] = useState();
    const [url, setUrl] = useStateIfMounted("www.rmf.fm");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
            setIsError(false);
            setIsLoading(true);
            try {
                axios('https://api.ipstack.com/' + url.address + '?access_key=1c426253c723a8be37fdc1720c1186').then(
                    result => {
                        setRet(result.data)
                        setIsLoading(false);

                    }
                )
            } catch (error) {
                setIsError(true);
            }
    }, [url]);

    return [{ret, isLoading, isError}, setUrl];
}
