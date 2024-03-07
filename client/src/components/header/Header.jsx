import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-200 h-16 w-full'>
      <div className='container px-4 mx-auto h-full flex items-center justify-between'>
        <h1>
          <NavLink to='/' className='text-xl font-bold'>
            Auth App
          </NavLink>
        </h1>

        <nav>
          <ul className='flex gap-x-4'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/profile'>Profile</NavLink>
            </li>
            <li>
              <NavLink to='/signin'>Sign in</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>Sign up</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
