import './App.css';
import {BackGround, TopHeader, MainP, MainGrid, LilGrid,ButtonLink} from './style.js'
import {Grommet, Button} from 'grommet';
import { Sans, StrikeThrough, Code, Checkbox, Cli, Test  } from 'grommet-icons';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import P1 from './p1.js';
import P2 from './p2.js';
import P3 from './p3.js';
import P4 from './p4.js';
import P6 from './p6.js';
import L1 from './lab1.js';
import L2 from './lab2.js';
import L3 from './lab3.js';
import L6 from './lab6-8.js';




function Main() {
  return (
    <BackGround>
    <TopHeader> <h2> Hello, welcome to my portfolio </h2>  </TopHeader>
      <MainGrid>
      <MainP>
      <Link to="/P1">

        <LilGrid>
        <Code size='large' color= 'pink' />
        <h2>Project 1 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P2">
        <LilGrid>
        <StrikeThrough size='large' color= 'pink' />
        <h2>Project 2 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P3">
        <LilGrid>
        <Sans size='large' color= 'pink' />
        <h2>Project 3 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P4">

        <LilGrid>
        <Cli size='large' color= 'pink' />
        <h2>Project 4 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/P6">

        <LilGrid>
        <Checkbox size='large' color= 'pink' />
        <h2>Project 6 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/Lab1">

        <LilGrid>
        <Test size='large' color= 'pink' />
        <h2>Lab 1 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/Lab2">

        <LilGrid>
        <Test size='large' color= 'pink' />
        <h2>Lab 2 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/Lab3">

        <LilGrid>
        <Test size='large' color= 'pink' />
        <h2>Lab 3 </h2>
        </LilGrid>
        </Link>
      </MainP>

      <MainP>
      <Link to="/Lab6">

        <LilGrid>
        <Test size='large' color= 'pink' />
        <h2>Lab 6-8 </h2>
        </LilGrid>
        </Link>
      </MainP>


    </MainGrid>


    </BackGround>
  );
}

export default Main;
