import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { ReactComponent as Portfolio } from '../assets/portfolio.svg';
import { ReactComponent as Contact } from '../assets/contact.svg';
import { ReactComponent as Feedback } from '../assets/feedback.svg';
import { ReactComponent as Home } from '../assets/Home.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState('home');
  const setSelectedHome = () => setSelectedNav("home");
  const setSelectedPortfolio = () => setSelectedNav("portfolio");
  const setSelectedContact = () => setSelectedNav("contact");
  const setSelectedFeedback = () => setSelectedNav("feedback");

  return (
    <Fragment>
      <div className='navigation'>

        <Link className='home-box' onClick={setSelectedHome} to='/'>
          (AC)
        </Link>

        <div className='nav-container'>
          {
            selectedNav === 'home' ?
              <div className='selected-box' onClick={setSelectedHome}>
                <Link className='logo-container' to='/'>
                  <Home className='logo' />
                  <div className='logo-title'>Home</div>
                </Link>
              </div> :
              <div className='box' onClick={setSelectedHome}>
                <Link className='logo-container' to='/'>
                  <Home className='logo' />
                  <div className='logo-title'>Home</div>
                </Link>
              </div>
          }
          {
            selectedNav === 'portfolio' ?
              <div className='selected-box' onClick={setSelectedPortfolio}>
                <Link className='logo-container' to='/portfolio'>
                  <Portfolio className='logo' />
                  <div className='logo-title'>Portfolio</div>
                </Link>
              </div> :
              <div className='box' onClick={setSelectedPortfolio}>
                <Link className='logo-container' to='/portfolio'>
                  <Portfolio className='logo' />
                  <div className='logo-title'>Portfolio</div>
                </Link>
              </div>
          }
          {
            selectedNav === 'contact' ?
              <div className='selected-box' onClick={setSelectedContact}>
                <Link className='logo-container' to='/contactme'>
                  <Contact className='logo' />
                  <div className='logo-title'>Contact Me</div>
                </Link>
              </div> :
              <div className='box' onClick={setSelectedContact}>
                <Link className='logo-container' to='/contactme'>
                  <Contact className='logo' />
                  <div className='logo-title'>Contact Me</div>
                </Link>
              </div>
          }
          {
            selectedNav === 'feedback' ?
              <div className='selected-box' onClick={setSelectedFeedback}>
                <Link className='logo-container' to='/feedback'>
                  <Feedback className='logo' />
                  <div className='logo-title'>Feedback</div>
                </Link>
              </div> :
              <div className='box' onClick={setSelectedFeedback}>
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