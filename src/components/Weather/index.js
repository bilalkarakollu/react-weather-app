import React from 'react'
import styles from './Weather.module.css';
import Card from './Card';
import Dropdown from './Dropdown';
import Placeholder from '../Placeholder';
import { useWeather } from '../../context/WeatherContext';

function Weather() {

    const { weather, city, isLoading } = useWeather();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.dropdown}>
                    <Dropdown />
                </div>
                <div className={styles.title}>
                    {city && city.name}
                </div>
            </div>
            <div>
                <div className={styles.card_container}>
                    {!isLoading && weather.daily.map((element, index) => <Card key={index} element={element} />)}
                    {isLoading && (
                        <>
                        <Placeholder/>
                        <Placeholder/>
                        <Placeholder/>
                        <Placeholder/>
                        <Placeholder/>
                        <Placeholder/>
                        <Placeholder/>
                        <Placeholder/>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Weather
