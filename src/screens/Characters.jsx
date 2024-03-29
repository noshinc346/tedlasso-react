
import { useState, useEffect } from 'react';
import {getCharacters} from "../services/characters";
import { Link } from 'react-router-dom';
import Character from '../components/Character.jsx';

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
    <div className='characterPage'>
      <h1 className='charactersTitle'>The Characters</h1>
      <p className='charactersLine'>Meet the characters from Ted Lasso. Each bringing their own unique story on screen.</p>
      <div>
        <Link className='createButton' to={`/create-character`}>
        <button>Create</button>
        </Link>
      </div>
      <div className="characters-container">
        {
          characters.map((character)=>(
            <Character character={character} key={character._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Characters