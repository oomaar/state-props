import React, { useState } from 'react';
import './App.css';
import Dark from './components/Dark';
import Nav from './components/Nav';
import { GlobalStyles } from './GlobalStyles';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darker = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <>
    {darkMode && <GlobalStyles />}
      <div className={`${darkMode ? 'App' : 'Dark'}`}>
        <Nav />
        <Dark setDarkMode={darker} />
      </div>
    </>
  );
}

export default App;

// className={`App ${toggleShow ? 'active' : ''}`}

// Props
// <h1>hello React</h1>
// <div className="home">
//   <Nav />
//   <Tweets />
// </div>

// // State
// <h1 className={toggleShow ? 'active' : ''}>Hello State</h1>
// <h2>counter {counter}</h2>
// <button onClick={inc}>Plus One</button>
// <button onClick={dec}>Minus One</button>
// <button onClick={toggler}>Dark Mode</button>


// const [counter, setCounter] = useState(0);
// const [toggleShow, setToggleShow] = useState(false);
// const [vids, setVids] = useState(['vid1', 'vid2']);

// const inc = () => {
//   setCounter(prev => prev + 1);
// }

// const dec = () => {
//   setCounter(counter - 1);
// }

// const toggler = () => {
//   setToggleShow(prev => !prev);
// }


// {toggleShow ? <GlobalStyles /> : ''}
// <div className={`App ${toggleShow ? 'active' : ''}`}>
//   <Nav />
//   <Video nr={counter} setToggleShow={toggler} />
// </div>


// import Nav from './components/Nav';
// import Video from './components/Video';
// import { GlobalStyles } from './GlobalStyles';
// import Nav from "./components/Nav";
// import Tweets from "./components/Tweets";