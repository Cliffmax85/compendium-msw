import React from 'react';
import styles from '../../App.css';

export default function characterCard({ name, image, species, world }) {
  return (
    <div className={styles.card}>
        <p className={styles.name}>{name}</p>
        <h2 className='world'>{world}</h2>
        <img className={styles.img} src={image} alt='character' />
        <h2 className='species'>{species}</h2>
    </div>
  )
}
