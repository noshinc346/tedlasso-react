import { NavLink } from "react-router-dom"; 

function Nav() {
  return (
    <nav>
        <NavLink className="navLinks" to="/home">Home</NavLink>
        <NavLink className="navLinks" to="/characters">Characters</NavLink>
        <NavLink className="navLinks" to="/episodes">Episodes</NavLink>
        <NavLink className="navLinks" to="/quotes">Quotes</NavLink>
    </nav>
  )
}

export default Nav