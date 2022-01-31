import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Users from './Users';
import { Transactions } from '../Newtransactions/Transactions';

const NewMembers = () => {
  return (
      <Container>
          <NewMember>
              <Typography variant='h6' className="title">
                  New Join Members
              </Typography>
              <Users name ="Allan Paul" position ="Web Developer"
                img= "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
              />
              <Users name ="Allan Paul" position ="Web Developer"
                img= "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
              />
              <Users name ="Allan Paul" position ="Web Developer"
                img= "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
              />
          </NewMember>
          <Transaction>
            <Transactions />
          </Transaction>
      </Container>
  );
};

export default NewMembers;

const Container = styled.div`
    display : flex;
    margin: 1rem 0 1rem 0;
    gap : 0.8rem;
`
const NewMember = styled.div`
    flex: 1;
    box-shadow: 0px 0px 6px -1px black;
    padding : 1rem;
    .title{
        padding-bottom : 1rem;
        font-weight : 600;
        font-size : 1.1rem;
    }
`

const Transaction = styled.div`
    flex: 2.3;
    box-shadow: 0px 0px 6px -1px black;
    padding : 1rem;
`