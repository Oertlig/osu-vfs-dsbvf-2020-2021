import styled from '@emotion/styled/macro';
import Switch from 'react-input-switch';
import React, { useState } from 'react';
import {
         NavLink
	} from 'react-router-dom';

const BarStyle = styled.nav`
  margin: 0px;
  padding: 10px 5px 0px 1px;
  height: 51px;


	background-color: rgba(0, 0, 0, 0.8);
`;

const List = styled.li`
  display: inline;

  a {
  	text-decoration: none;
    color: white;
  	padding: 11px 26px 11px 20px;
  	font-size: 35px;
  }

  button {
    color: black;
    margin: 0px 5px 0px 5px;
  	padding: 0px 5px 0px 5px;
  	font-size: 25px;
  }

  Switch {
    padding: 11px 26px 11px 20px;
  }
`;

function NavBar() {
  const [value, setValue] = useState('Remote');

  if(value == "Web") {
    console.log(value);
    return (
      <div>
        <BarStyle>
          <List> <a>OSU VFS DBVF 2020-2021</a> </List>
          <List>
            <a>Autonomous Control</a>
            <Switch on="Web" off="Remote" value={value} onChange={setValue} />
          </List>

          <List> <button type='submit'>Hover</button> </List>

        </BarStyle>
      </div>
    );
  } // end if
  else {
    console.log(value);
    return (
      <div>
        <BarStyle>
          <List> <a>OSU VFS DBVF 2020-2021</a> </List>
          <List>
            <a>Autonomous Control</a>
            <Switch on="Web" off="Remote" value={value} onChange={setValue} />
          </List>

        </BarStyle>
      </div>
    );
  } // end else
}

export default NavBar;
