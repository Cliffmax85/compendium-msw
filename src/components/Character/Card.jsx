import React from 'react'

export default function characterCard({ name, image, species, age }) {
  return (
    <div className='char-card'>
        <p className='name'>{name}</p>
        <img src={image} alt='character' />
        <h2 className='species'>{species}</h2>
        <h2 className='age'>{age}</h2>
    </div>
  )
}
