import { Outlet, Link } from "react-router-dom";
import { Fragment} from "react";
import { ReactComponent as HomeLogo} from '../assets/logo.svg';
import { ReactComponent as Portfolio } from '../assets/portfolio.svg';
import { ReactComponent as Contact } from '../assets/contact.svg';
import { ReactComponent as Feedback } from '../assets/feedback.svg';

import './navigation.styles.scss';

const Navigation = () =>
{
  return(
    <Fragment>
      <div className = 'navigation'>

        <div className = 'box'>
          <Link className = 'logo-container' to ='/'>
            <HomeLogo className = 'logo' />
          </Link>
        </div>
        <div className = 'box'>
          <Link className = 'logo-container' to ='/portfolio'>
            <Portfolio className = 'logo' />
          </Link>
        </div>
        <div className = 'box'>
          <Link className = 'logo-container' to ='/contactme'>
            <Contact className = 'logo' />
          </Link>
        </div>
        <div className = 'box'>
          <Link className = 'logo-container' to ='/feedback'>
            <Feedback className = 'logo' />
          </Link>
        </div>

    </div>

      <Outlet />
    </Fragment>
  )
}
export default Navigation;