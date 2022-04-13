import React from 'react'
import styles from './Card.module.css'
function Card({element}) {
    let dayName;
    let today = new Date().getDate(); 
    let min = Math.round(element.temp.min);
    let max = Math.round(element.temp.max);
    let main = element.weather[0].main;
    let icon = element.weather[0].icon;
    var event = new Date(element.dt*1000);
    var options = { weekday: 'long' };
    dayName = event.toLocaleDateString('en-US', options);



  return (
    <div className={`${styles.card} ${event.getDate() === today && styles.card_select}`}>
      <div className={styles.card_title}>{dayName}</div>
      <div className={styles.card_img}><img src={require(`../../../icons/${icon}.svg`)} alt={main} /></div>
      <div className={styles.card_main}>{main}</div>
      <div className={styles.card_footer}><div className={styles.card_footer_max}>{max}°</div> <div className={styles.card_footer_min}>{min}°</div></div>
    </div>
  )
}

export default Card
