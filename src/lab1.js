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

function L1() {
  return (
    <BackGround>
    <TopHeader> <h2> Lab 1 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Practiced VS code shortcuts  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/lab1/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default L1;
