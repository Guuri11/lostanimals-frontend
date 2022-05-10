import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon, UserIcon, LogoutIcon, LoginIcon, MenuIcon,
} from '@heroicons/react/outline';
import { useAppContext } from '../../../hooks/AppContext';
import NavItem from './NavItem';

export default function Navbar(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { token, handleToken, handleUser } = useAppContext();

  const handleLogout = ():void => {
    if (handleToken && handleUser) {
      handleToken('');
      handleUser(null);
    }
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 border-b-2 border-[#EEEEEE] mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ">Lost animals</Link>
          <button
            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <MenuIcon className="w-4 h-4" />
          </button>
        </div>
        <div
          className={
                `lg:flex flex-grow items-center${
                  navbarOpen ? ' flex' : ' hidden'}`
              }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {
              token ? (
                <>
                  <NavItem label="Home" route="/" icon={<HomeIcon className="h-4 w-4" />} />
                  <NavItem label="Profile" route="/profile" icon={<UserIcon className="h-4 w-4" />} />
                  <NavItem label="Logout" route="/" callback={handleLogout} icon={<LogoutIcon className="h-4 w-4" />} />
                </>
              )
                : (
                  <>
                    <NavItem label="Login" route="/login" icon={<LoginIcon className="h-4 w-4" />} />
                    <NavItem label="Register" route="/register" icon={<LoginIcon className="h-4 w-4" />} />
                  </>
                )
              }
          </ul>
        </div>
      </div>
    </nav>
  );
}
