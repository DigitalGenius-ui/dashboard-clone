import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { ViewDay, Timeline, TrendingUp, 
PersonOutline, AttachMoneyOutlined, AllInbox, BarChartOutlined, EmailOutlined,
DynamicFeedOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, Report  } from '@material-ui/icons';

const Menu = () => {
  return (
    <Container>
        <Typography variant='h4' className='menuName'>
          Dashboard
        </Typography>
        <Items  className="icon">
          <Item Icon={ViewDay} name="home" className="active"/>
          <Item Icon={Timeline} name="analytics"/>
          <Item Icon={TrendingUp} name="sales"/>
        </Items>
        <Typography variant='h4' className='menuName'>
          Quick Menu 
        </Typography>
        <Items className="icon">
          <Item Icon={PersonOutline} name="user"/>
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
  .menuName{
    font-size: 0.8rem;
    font-weight: 600;
    color : #0000009e;
  }
`
const Items = styled.div`
  padding : 0.5rem;
  .active{
    background-color: rgba(0, 139, 219, 0.123);
    border-radius: 4px;
  }
`