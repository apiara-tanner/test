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

function L3() {
  return (
    <BackGround>
    <TopHeader> <h2> Lab 3 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> Worked with functions and object destructuring. Also explored different function and object syntax.  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/lab3/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default L3;
