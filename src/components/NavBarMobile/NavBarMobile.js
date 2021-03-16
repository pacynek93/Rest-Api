import React, {useState} from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NavBarMobile.scss'



const NavBarMobile = () => {

  const [isActive, setActive] = useState(false);

  const handleChange = () => {
    setActive(!isActive);
  };

return(
  <nav className='navBarMobile'>
    <Icon className='navBarIcon' name='align justify' size='large' onClick={handleChange} />
    <Link className= {isActive? 'navBarMobileVisibleItem': 'navBarMobileItem'} to='/'>Home</Link>
    <Link className={isActive? 'navBarMobileVisibleItem': 'navBarMobileItem'} to='/user'>User List</Link>
    <Link className={isActive? 'navBarMobileVisibleItem': 'navBarMobileItem'} to='/post'>Post List</Link>
    <Link className={isActive? 'navBarMobileVisibleItem': 'navBarMobileItem'} to='/comments'>User Comments</Link>
    <Link className={isActive? 'navBarMobileVisibleItem': 'navBarMobileItem'} to='/todos'>User Todos</Link>

  </nav>
)
};





export default NavBarMobile;
