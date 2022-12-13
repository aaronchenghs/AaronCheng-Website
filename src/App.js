import React from 'react';
import Navigation from './routes/navigation.components';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './routes/contactme/contactme.component';
import Portfolio from './routes/portfolio/portfolio.component';
import BottomBar from './routes/bottombar.components.jsx'
import Feedback from './routes/feedback/feedback.component';

const App = () =>
{
  return (
  <div className= 'website'>
    <Routes>

      <Route path = '/' element = {<Navigation />}>

        <Route index element={<Home />}/>
        <Route path ='contactme' element = {<ContactMe />} />
        <Route path ='portfolio' element = {<Portfolio />} />
        <Route path = 'feedback' element = {<Feedback />} />

      </Route>

    </Routes>

    <BottomBar></BottomBar>
  </div>
  );
}

export default App;
