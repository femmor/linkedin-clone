import React from 'react';
import './App.css';

// Components
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';

function App() {
  return (
    <div className="app">
      <Header/>

      {/* App Body */}
      <div className="app__body">
        <Sidebar/>
        {/* <Feed/>
        <Widget/> */}
      </div>
        {/* Feed - middle */}
        {/* Widget - right */}
      
    </div>
  );
}

export default App;
