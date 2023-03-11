import {Link} from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/solid';
import SBSLogo from '../../imgs/sbs-logo.png';
import './style.css';
import { HamburgerMenu } from '../molecules/HamburgerMenu';

export const Navbar =() => {
  return (
    <div className="navBar fixed w-full py-4 px-10 flex items-center justify-between">
      <div><img src={SBSLogo} alt="logo" /></div>
      <div className="sm:flex hidden">
        <Link className="text-lg font-semibold text-gray-900 mx-4 hover:text-indigo-600 transition delay-300 duration-300 ease-in-out" to="/">Home</Link>
        <Link className="text-lg font-semibold text-gray-900 mx-4 hover:text-indigo-600 transition delay-300 duration-300 ease-in-out" to="/services">Services</Link>
        <Link className="flex items-center text-lg font-semibold text-gray-900 mx-4 hover:text-indigo-600 transition delay-300 duration-300 ease-in-out"><PhoneIcon className="mr-2 phoneIcon" />(980) 907 1892</Link>
      </div>
      <div className="sm:hidden flex">
        <HamburgerMenu name="hole" />
      </div>
    </div>
  );
};
