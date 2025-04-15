import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from "./test/Test";
import {Post} from "./post/Post";
import {User} from "./user/User";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
               Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>Lorem ipsum dolor.</p>
            <Test/>
            <Post/>
            <User/>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
