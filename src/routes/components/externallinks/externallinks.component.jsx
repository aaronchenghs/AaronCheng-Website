import { ReactComponent as LinkedInLogo} from '../../../assets/lin.svg';
import { ReactComponent as GitHubLogo} from '../../../assets/github.svg';
import React from 'react';
import { Fragment } from 'react';
import './externallinks.styles.scss';

const ExternalLinks = () =>
{
    return (
    <Fragment>
    <div className = 'ext-box-container'>
        
        <div className = 'ext-box'>
            <a className = 'ext-link' href = 'https://www.linkedin.com/in/aaron-cheng-7525a21b7/' target ='_blank' rel="noreferrer">
                <LinkedInLogo className = 'logo' />
            </a>
        </div>
        <div className = 'ext-box'>
            <a className = 'ext-link' href = 'https://github.com/aaronchenghs' target ='_blank' rel="noreferrer">
                <GitHubLogo className = 'logo' />
            </a> 
        </div>

    </div>
    </Fragment>
    )
}
export default ExternalLinks;