import React from 'react'
import Cities from '../../../data/cities';
import styles from './Dropdown.module.css'
import { useWeather } from '../../../context/WeatherContext';

function Dropdown() {

    const { weather, setCity, isLoading } = useWeather();

    const handleCity = (e) => setCity(Cities[e.target.value]);

    return (
        <select className={styles.dropdown} name="city" id="city" onChange={handleCity}>
            {Cities.map((element, index) => <option key={index} value={index}>{element.name}</option>)}
        </select>
    )
}

export default Dropdown
