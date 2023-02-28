import {Link} from 'react-router-dom';
import SBSLogo from '../imgs/sbs-logo.png';

export const Navbar =() => {
  return (
    <div>
      <div><img src={SBSLogo} alt="logo" /></div>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
    </div>
  );
};
