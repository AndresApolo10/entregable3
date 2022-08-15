import React from 'react'

const LocationInfo = ({location}) => {

  return (
    <article>
        <h2 className='title__info'>{location?.name}</h2>
        <ul className='ul__info'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo