import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { ViewDay, Timeline, TrendingUp, 
PersonOutline, AttachMoneyOutlined, AllInbox, BarChartOutlined, EmailOutlined,
DynamicFeedOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, Report  } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Container>
        <Typography variant='h4' className='menuName'>
          Dashboard
        </Typography>
        <Items  className="icon">
          <Link to="/"><Item Icon={ViewDay} name="home" className="active"/></Link>
          <Item Icon={Timeline} name="analytics"/>
          <Item Icon={TrendingUp} name="sales"/>
        </Items>
        <Typography variant='h4' className='menuName'>
          Quick Menu 
        </Typography>
        <Items className="icon">
          <Link to="/user"><Item Icon={PersonOutline} name="user"/></Link>
          <Item Icon={AllInbox} name="products"/>
          <Item Icon={AttachMoneyOutlined} name="transaction"/>
          <Item Icon={BarChartOutlined} name="reports"/>
        </Items>
        <Typography variant='h4' className='menuName'>
          Notifications
        </Typography>
        <Items className="icon">
          <Item Icon={EmailOutlined} name="mail"/>
          <Item Icon={DynamicFeedOutlined} name="feedback"/>
          <Item Icon={ChatBubbleOutlineOutlined} name="messages"/>
        </Items>
        <Typography variant='h4' className='menuName'>
          staff
        </Typography>
        <Items className="icon">
          <Item Icon={WorkOutlineOutlined} name="manage"/>
          <Item Icon={Timeline} name="analytics"/>
          <Item Icon={Report} name="reports"/>
        </Items>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  position : sticky;
  top : 50px;
  left : 0;
  right : 0;
  background-color: rgba(0, 139, 219, 0.041);
  height : calc(100vh - 50px);
  padding : 0 1rem;
  padding-top: 0.4rem;
  .menuName{
    font-size: 0.8rem;
    font-weight: 600;
    color : #0000009e;
  }
`
const Items = styled.div`
  padding : 0.2rem 0.5rem;
  .active{
    background-color: rgba(0, 139, 219, 0.123);
    border-radius: 4px;
  }
  a{
    color : #0000009e;
    text-decoration: none;
  }
`