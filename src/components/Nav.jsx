import { NavLink } from "react-router-dom"; 

function Nav() {
  return (
    <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/episodes">Episodes</NavLink>
        <NavLink to="/quotes">Quotes</NavLink>
    </nav>
  )
}

export default Nav