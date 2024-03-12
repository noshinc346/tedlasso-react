import React from 'react'
import { Link } from 'react-router-dom';

function Character({character}) {
  return (
    <Link to={`/characters/${character._id}`}>
        <img className="character-images" src={character.image} alt={character.character}/>
    </Link>
  )
}

export default Character