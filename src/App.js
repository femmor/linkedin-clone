import React from 'react';
import './App.css';

// Components
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';
import {useSelector} from 'react-redux'
import { selectUser } from './features/userSlice';
import Login from './components/auth/Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header/>
      {
        !user ? (<Login />) : (
          <div className="app__body">
            <Sidebar/>
            <Feed/>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
