import React from 'react';
import Navigation from './routes/navigation.components';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './routes/contactme/contactme.component';
import Portfolio from './routes/portfolio/portfolio.component';
import Feedback from './routes/feedback/feedback.component';
import RealHome from './routes/realhome/realhome.component';

import './App.scss';

const App = () => {
  return (
    <div>
      <div className='website'>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<RealHome />} />

            <Route path='resume' element={<Home />} />
            <Route path='contactme' element={<ContactMe />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='feedback' element={<Feedback />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
