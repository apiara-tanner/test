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

function P4() {
  return (
    <BackGround>
    <TopHeader> <h2> Project 4 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Worked with error reporting and javascript classes. Additionally, got an introduction to postman  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/cit281-p4/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default P4;
