import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Portfolio } from '../assets/portfolio.svg';
import { ReactComponent as Contact } from '../assets/contact.svg';
import { ReactComponent as Feedback } from '../assets/feedback.svg';
import { ReactComponent as Home } from '../assets/Home.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>

        <Link className='home-box' to='/'>
          Aaron Cheng
        </Link>

        <div className='nav-container'>
          <div className='box'>
            <Link className='logo-container' to='/'>
              <Home className='logo' />
              <div className='logo-title'>Home</div>
            </Link>
          </div>
          <div className='box'>
            <Link className='logo-container' to='/portfolio'>
              <Portfolio className='logo' />
              <div className='logo-title'>Portfolio</div>
            </Link>
          </div>
          <div className='box'>
            <Link className='logo-container' to='/contactme'>
              <Contact className='logo' />
              <div className='logo-title'>Contact Me</div>
            </Link>
          </div>
          <div className='box'>
            <Link className='logo-container' to='/feedback'>
              <Feedback className='logo' />
              <div className='logo-title'>Feedback</div>
            </Link>
          </div>

        </div>

      </div>

      <Outlet />
    </Fragment>
  )
}
export default Navigation;