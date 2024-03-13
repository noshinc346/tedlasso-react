import React, { useDebugValue } from 'react'
import { useState, useEffect } from 'react';
import { getCharacter, deleteCharacter } from '../services/characters';
import { Link, useParams, useNavigate } from 'react-router-dom';

function CharacterDetail() {

  const [character, setCharacter] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

 const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  useEffect(()=> {
    fetchCharacter()
  }, [])

  // const handleDelete = async () => {
  //   await deleteCharacter(id)
  //   navigate("/characters")
  // }

  const handleDelete = async () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this character?");
    if (userConfirmed) {
      await deleteCharacter(id);
      navigate("/characters");
    } else {
      console.log("Deletion cancelled by user");
    }
  };
  


  return (
    <div className='detailPage'>
      <h1>Meet {character.character}</h1>
      <h2>Also known as: {character.aliases}</h2>
      <img className='characterImg' src={character.image} alt={character.character} />
      <p>Played by: {character.actorName}</p>
      <p>Occupation: {character.occupation}</p>
      <p>{character.postion}</p>
      <p>{character.number}</p>
      <p>{character.affiliations}</p>
      <p>{character.height}</p>
      <p>{character.gender}</p>
      <p>Birthplace: {character.birthplace}</p>

      <div>
        <Link to={`/characters/${id}/edit`}>
        <button>Edit</button>
        </Link>
        
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default CharacterDetail