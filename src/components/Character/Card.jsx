import React from 'react';
import styles from '../../App.css';

export default function characterCard({ name, image, species, age }) {
  return (
    <div className={styles.card}>
        <p className='name'>{name}</p>
        <img className={styles.img} src={image} alt='character' />
        <h2 className='species'>{species}</h2>
        <h2 className='age'>{age}</h2>
    </div>
  )
}
