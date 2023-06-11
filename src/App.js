import './App.css';
import Main from './main.js';
import P1 from './p1.js';
import P2 from './p2.js';
import P3 from './p3.js';
import P4 from './p4.js';
import P6 from './p6.js';
import L1 from './lab1.js';
import L2 from './lab2.js';
import L3 from './lab3.js';
import L6 from './lab6-8.js';

import {BackGround, TopHeader, LibGrid, ArtistLib, LibImg} from './style.js'
import {Grommet} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/P1" element={<P1 />} />
        <Route path="/P2" element={<P2 />} />
        <Route path="/P3" element={<P3 />} />
        <Route path="/P4" element={<P4 />} />
        <Route path="/P6" element={<P6 />} />
        <Route path="/Lab1" element={<L1 />} />
        <Route path="/Lab2" element={<L2 />} />
        <Route path="/Lab3" element={<L3 />} />
        <Route path="/Lab6" element={<L6 />} />
      </Routes>







  );
}

export default App;
