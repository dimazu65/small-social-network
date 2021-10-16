import React from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar'; 
import { News } from './components/News/News'; 
import { Music } from './components/Music/Music'; 
import { Settings } from './components/Settings/Settings'; 
import { BrowserRouter, Route } from 'react-router-dom';
import { MyDialogsContainer } from './components/Dialogs/DialogsContainer';

export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <MyDialogsContainer />}
          />
          <Route
            path="/profile"
            render={() => <Profile />}
          />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

//export default App;
