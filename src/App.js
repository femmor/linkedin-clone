import React, { useEffect } from 'react';
import './App.css';

// Components
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';
import {useSelector, useDispatch} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/auth/Login';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
          dispatch(
            login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

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
