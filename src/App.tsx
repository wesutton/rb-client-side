import { useState, useEffect } from 'react';
import './App.css';
import Auth from './auth/Auth';
import Sitebar from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

const [sessionToken, setSessionToken] = useState<string | null>(null);

useEffect(() => {
  if(localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken: any) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return (
    <div className="App">
      <Sitebar clickLogout = {clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;
