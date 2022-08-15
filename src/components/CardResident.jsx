import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

  const resident = useFetch(url)

  return (
    <article className='card'>
        <header className='head__img'>
            <img src={resident?.image} alt={`image of ${resident?.name}`} />
        </header>
            <div className='card__info'>
                <h3>{resident?.name}</h3>
                <ul className='ul__card'>
                    <h4>{resident?.status}</h4>
                    <li><span>Species: </span>{resident?.species}</li>
                    <li><span>Origin: </span>{resident?.origin.name}</li>
                    <li><span>Eppisodes where appear: </span>{resident?.episode.length}</li>
                </ul>
            </div>
    </article>
  )
}

export default CardResident