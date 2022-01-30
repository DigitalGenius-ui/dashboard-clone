import { Avatar, Typography, Badge } from '@material-ui/core';
import React from 'react';
import { NotificationsNoneOutlined, LanguageOutlined, SettingsOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Header = () => {
  return (
      <Container>
          <Logo>
            <Typography variant="h3" className="logo">
                Digital Genius
            </Typography>
        </Logo>
        <Icons>
            <span className="icon"><Badge color="primary" badgeContent={1}><NotificationsNoneOutlined  style={{color : "#000000b9"}}/></Badge></span>
            <span className="icon"><Badge color="primary" badgeContent={1}><LanguageOutlined  style={{color : "#000000b9"}}/></Badge></span>
            <span className="icon"><Badge color="primary" badgeContent={1}><SettingsOutlined style={{color : "#000000b9"}}/></Badge></span>
            <Avatar style={{height : "2.3rem", width : "2.3rem", cursor : "pointer"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
        </Icons>
      </Container>
  );
};

export default Header;

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 1rem;
    height : 50px;
    position : sticky;
    top : 0;
    background : white;
`
const Logo = styled.div`
    .logo{
        font-size : 1.4rem;
        font-weight: 600;
        color : #0462b9
    }
`
const Icons = styled.div`
    display : flex;
    align-items : center;
    .icon{
        margin-right : 0.6rem;
        cursor : pointer;
    }
`