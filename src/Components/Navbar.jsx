import { NavLink } from 'react-router-dom';
import { DarkModeToggle } from './DarkModeToggle';

export const NavBar= () => {

  return (
    <nav>
        <ul>
            <li>
                <NavLink 
                    className={ ({ isActive }) => isActive ? 'nav-item-active' : '' }
                    to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={ ({ isActive }) => isActive ? 'nav-item-active' : '' } 
                    to="/contact">
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={ ({ isActive }) => isActive ? 'nav-item-active' : '' }
                    to="/favorite">
                    Favorites
                </NavLink>
            </li>
        </ul>
        <DarkModeToggle />
    </nav>
  )
}