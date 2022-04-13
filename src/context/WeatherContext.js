import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";
import Cities from '../data/cities';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setCity(Cities[0])
        }
    }, [])

    useEffect(() => {
        getData()
    }, [city])

    function showPosition(position) {
        setCity({
            id: 34,
            name: "İstanbul",
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        })
    }

    async function getData(){
        if(!city) return false;
        setIsLoading(true);
        const {data, status} = await axios(`${process.env.REACT_APP_API_ENDPOINT}/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`)
        if(status === 200){
            setWeather(data);
            setIsLoading(false);
        }else{
            setIsLoading(true);
        }
    }

    const values = {
        weather,
        city,
        setCity,
        isLoading
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export const useWeather = () => useContext(WeatherContext);