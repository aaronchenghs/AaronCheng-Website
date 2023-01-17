import React, { useState } from "react";
import { Fragment } from "react";
import BottomBar from '../bottombar.components.jsx';

import './home.styles.scss';
import { homecategories } from '../../plaintext.jsx';

const Home = () => {
  const [CategorySelection, SetCategorySelection] = useState('Education');
  //onClick for categories
  const openEducation = () => SetCategorySelection('Education');
  const openToolbox = () => SetCategorySelection('ToolBox');
  const openExperience = () => SetCategorySelection('Experience');
  const openOrigins = () => SetCategorySelection('Origins');

  let categoryDisplay = homecategories[CategorySelection];


  return (
    <Fragment>
      <body className='Home-Page'>

        <div className='Page-Header'>
          <text className='Header-Text'>Profile</text>
        </div>

        <div className='bio'>

          <div className='category-info'>{categoryDisplay}</div>
          <div className='categories-container'>
            <button className='category' onClick={openEducation}>
              <text className='category-text'>Education</text>
            </button>
            <button className='category' onClick={openToolbox}>
              <text className='category-text'>Tool Box</text>
            </button>
            <button className='category' onClick={openExperience}>
              <text className='category-text'>Experience</text>
            </button>
            <button className='category' onClick={openOrigins}>
              <text className='category-text'>Origins</text>
            </button>
          </div>

        </div>

      </body>
      <BottomBar></BottomBar>
    </Fragment>
  )
}
export default Home;