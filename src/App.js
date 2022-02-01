
import './App.css';
import Header from "./components/Header"
import Emojilist from './components/EmojList';
import {useState} from "react"

function App() {



  return (
    <div className="App">
      <Header />

      <Emojilist/>

    </div>
  );
}

export default App;
