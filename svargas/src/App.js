import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          Hola mundo
        </a>
        <h2>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </h2>
        <h2>
      <label for="name">password:</label>
      <input type="text" id="name" name="user_name" />
    </h2>
    <br></br>
    <button onClick="Entregar()">Submit</button>

      </header>
    </div>
  );
}

export default App;
