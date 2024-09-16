import React from "react";
import './App.css';
import { ThemeToggle } from './Components/Context/ThemeToggle';
import FocusInput from './Components/Useref/FocusInput';
import Timer from './Components/Useref/Timer';
import ParentComponent from './Components/UseImperativeHandle/ParentComponent';
import Debounce from './Components/Debounce/Debounce';
import Throttle from './Components/Throttle/Throttle';

function App() {
  return (
    <>
      <div className="app">
        <ThemeToggle />
        <FocusInput />
        <Timer />
        <ParentComponent />
        <Debounce />
        <Throttle />
      </div>
    </>
  );
}

export default App;

