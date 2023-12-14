import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/apropos">A propos</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Nav