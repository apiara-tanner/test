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

function L2() {
  return (
    <BackGround>
    <TopHeader> <h2> Lab 2 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Worked in command line making directories, adding to git, and moving between files  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/lab2/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default L2;
