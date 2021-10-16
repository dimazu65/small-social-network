import React from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar'; 
import { Dialogs } from './components/Dialogs/Dialogs'; 
import { News } from './components/News/News'; 
import { Music } from './components/Music/Music'; 
import { Settings } from './components/Settings/Settings'; 
import { BrowserRouter, Route } from 'react-router-dom';

export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs store={props.store} />}
          />
          <Route
            path="/profile"
            render={() => <Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch}
              />}
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
