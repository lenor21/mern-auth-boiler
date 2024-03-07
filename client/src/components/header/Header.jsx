import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/signin'>Sign in</NavLink>
      <NavLink to='/signup'>Sign up</NavLink>
    </div>
  );
};

export default Header;
