import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCharacter } from '../services/characters.js';

function CharacterCreate() {

  const [character, setCharacter] = useState({
    character: "",
    aliases: "",
    actorName: "",
    occupation: "",
    position: "",
    number: "",
    affiliations: "",
    height: "",
    gender: "",
    birthplace: "",
    image: ""
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value} = e.target

    setCharacter((prevCharacter)=>({
      ...prevCharacter,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createCharacter(character)
    navigate("/characters") 
  }


  return (
    <div>
      <h1>Add a new character in our Database!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Character name'
          name='character'
          value={character.character}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder='Aliases'
          name='aliases'
          value={character.aliases}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Actor's Name"
          name='actorName'
          value={character.actorName}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Occupation "
          name='occupation'
          value={character.occupation}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Position "
          name='position'
          value={character.position}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Number "
          name='number'
          value={character.number}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Affiliations "
          name='affiliations'
          value={character.affiliations}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Height "
          name='height'
          value={character.height}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Gender "
          name='gender'
          value={character.gender}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Birthplace "
          name='birthplace'
          value={character.birthplace}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder="Add image url "
          name='image'
          value={character.image}
          onChange={handleChange}
        />
        <button type="submit">Create your Character!</button>
      </form>
    </div>
  )
}

export default CharacterCreate