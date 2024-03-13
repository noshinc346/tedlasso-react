import React from 'react'
import { Link } from 'react-router-dom';

function Character({character}) {
  return (
    <Link className='characterBox' to={`/characters/${character._id}`}>
        <h4>{character.character}</h4>
        <img className="character-images" src={character.image} alt={character.character}/>
    </Link>
  )
}

export default Character