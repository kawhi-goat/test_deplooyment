import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
// import { TimeoutLogic } from "./TimooutLogic"
import SweetModal from './SweetModal';
function App() {
  return (
    <div class="App">
      <h1>Main Page</h1>
      {/* <TimeoutLogic/> */}
      <SweetModal/>
    </div>
  );
}

export default App;
