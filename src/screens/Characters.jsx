
import { useState, useEffect } from 'react';
import {getCharacters} from "../services/characters";

function Characters() {
  
  const [characters, setCharacters] = useState([])

  async function fetchCharacters() {
    const allCharacters = await getCharacters()
    setCharacters(allCharacters)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])


  return (
    <div>Characters</div>
  )
}

export default Characters