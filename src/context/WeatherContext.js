import { useEffect, useState, useContext, createContext } from "react";
import Cities from '../data/cities';

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    useEffect(() => {
        getLocation()
    },[])

    async function getLocation() {
        if (navigator.geolocation) {
         await navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            setCity(Cities[0])
        }
      }
      function showPosition(position) {
        setCity({
            id: 34,
            name: "İstanbul",
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
      }

    const values = {
        weather,
        setWeather
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export const useWeather = () => useContext(WeatherContext);