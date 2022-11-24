import React from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Hack from './components/Hack/Hack';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="loader">En attente...</p>

  return (
    <div className="App">
      {user
        ? <Hack />
        : <SignIn />}
    </div>
  );

}

export default App;
