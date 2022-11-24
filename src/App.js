import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Hack from './components/Hack/Hack';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user
        ? <Hack />
        : <SignIn />}
    </div>
  );

}

export default App;
