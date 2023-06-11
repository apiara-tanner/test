import './App.css';
import {BackGround, TopHeader, MainP, MainGrid, LilGrid,ButtonLink} from './style.js'
import {Grommet, Button} from 'grommet';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function P6() {
  return (
    <BackGround>
    <TopHeader> <h2> Project 6 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Further worked with classes to generate the perimeters and areas of different shape arrays.  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/cit281-p6/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default P6;
