import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SearchView from './Components/SearchView';
import { useState } from 'react';
import Cinemas from './Components/Cinemas';

function App() {
  const [router, setRouter] = useState("/")

  return (
    <div className="App">
      <Header/>
      {router == "/" ? <Cinemas/> : ""}
      
    </div>
  );
}

export default App;
