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

function L6() {
  return (
    <BackGround>
    <TopHeader> <h2> Lab 6 + 8 </h2>  </TopHeader>
    <h2> Description:  </h2>
    <h3> In lab 6, we again used objects and classes to find a book within a library database. In lab 8, we used fastify to direct errors and different url parameters  </h3>

    <ButtonLink href="https://github.com/apiara-tanner/lab6-8/"> Link to GitHub Repo </ButtonLink>

    </BackGround>
  );
}

export default L6;
