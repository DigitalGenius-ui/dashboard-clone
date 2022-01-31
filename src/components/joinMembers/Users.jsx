import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { RemoveRedEye } from '@material-ui/icons';

const Users = ({ img, name, position }) => {
  return(
    <User>
        <Avatar style={{width : "3rem", height : "3rem"}} src={img}/>
        <Name>
            <h4>{name}</h4>
            <p style={{fontSize : "0.8rem"}}>{position}</p>
        </Name>
        <Display>
            <p style={{fontSize : "0.8rem", fontWeight : "600"}}>Display</p>
            <RemoveRedEye style={{fontSize: "0.9rem"}}/>
        </Display>
    </User>
  );
};

export default Users;

const User = styled.div`
    display  : flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom : 1rem;
`

const Name = styled.div``

const Display = styled.div`
    display  : flex;
    align-items: center;
    flex-direction: row-reverse;
    gap : 0.2rem;
    background-color : #d8d1d1;
    padding : 0.4rem 0.5rem;
    border-radius: 7px;
`