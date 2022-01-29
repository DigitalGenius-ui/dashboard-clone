import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Item = ({name, Icon, className}) => {
  return (
      <Active className={className}>
        <Container>
        <Icons>
          <Icon className="icons"/>
        </Icons>
        <Typography variant='subtitle1' className="name">
          {name}
        </Typography>
      </Container>
      </Active>
  );
};

export default Item;

const Container = styled.div`
  display : flex;
  align-items: center;
  padding : 0.2rem 0.2rem;
  color : #000000ba;
  cursor : pointer;
  .name{
    font-size: 0.8rem;
    text-transform: capitalize;
    font-weight: 500;
    margin-left: 0.2rem;
  }
`
const Icons = styled.div`
  .icons{
    font-size: 1rem;
  }
`
const Active = styled.div`
  margin : 0.2rem 0;
  border-radius: 4px;
  &:hover{
    background-color: rgba(0, 139, 219, 0.123);
  }
`