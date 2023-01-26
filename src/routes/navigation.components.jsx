import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { ReactComponent as Portfolio } from '../assets/portfolio.svg';
import { ReactComponent as Contact } from '../assets/contact.svg';
import { ReactComponent as Feedback } from '../assets/feedback.svg';
import { ReactComponent as Home } from '../assets/Home.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState('home');

  return (
    <Fragment>
      <div className='navigation'>

        <Link className='home-box' onClick={()=>setSelectedNav('home')} to='/'>
          (AC)
        </Link>

        <div className='nav-container'>
          {
            selectedNav === 'home' ?
              <div className='selected-box'>
                <Link className='logo-container' to='/'>
                  <Home className='logo' />
                  <div className='logo-title'>Home</div>
                </Link>
              </div> :
              <div className='box' onClick={()=>setSelectedNav('home')}>
                <Link className='logo-container' to='/'>
                  <Home className='logo' />
                  <div className='logo-title'>Home</div>
                </Link>
              </div>
          }
          {
            selectedNav === 'portfolio' ?
              <div className='selected-box'>
                <Link className='logo-container' to='/portfolio'>
                  <Portfolio className='logo' />
                  <div className='logo-title'>Portfolio</div>
                </Link>
              </div> :
              <div className='box' onClick={()=>setSelectedNav('portfolio')}>
                <Link className='logo-container' to='/portfolio'>
                  <Portfolio className='logo' />
                  <div className='logo-title'>Portfolio</div>
                </Link>
              </div>
          }
          {
            selectedNav === 'contact' ?
              <div className='selected-box'>
                <Link className='logo-container' to='/contactme'>
                  <Contact className='logo' />
                  <div className='logo-title'>Contact Me</div>
                </Link>
              </div> :
              <div className='box' onClick={()=>setSelectedNav('contact')}>
                <Link className='logo-container' to='/contactme'>
                  <Contact className='logo' />
                  <div className='logo-title'>Contact Me</div>
                </Link>
              </div>
          }
          {
            selectedNav === 'feedback' ?
              <div className='selected-box'>
                <Link className='logo-container' to='/feedback'>
                  <Feedback className='logo' />
                  <div className='logo-title'>Feedback</div>
                </Link>
              </div> :
              <div className='box' onClick={()=>setSelectedNav('feedback')}>
                <Link className='logo-container' to='/feedback'>
                  <Feedback className='logo' />
                  <div className='logo-title'>Feedback</div>
                </Link>
              </div>
          }

        </div>

      </div>

      <Outlet />
    </Fragment>
  )
}
export default Navigation;