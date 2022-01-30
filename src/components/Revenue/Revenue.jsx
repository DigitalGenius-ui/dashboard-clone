import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const Revenue = () => {
  return (
    <Container>
        <Box>
            <Typography variant='h6' className="title">
                Revenue
            </Typography>
            <div className="revenue">
                <h3>$2,415</h3>
                <p>-11,4 
                    <span><ArrowDownward style={{fontSize :"1rem", color : "red"}}/></span>
                </p>
            </div>
            <Typography variant='subtitle1' className="month">
                Compared to last month
            </Typography>
        </Box>
        <Box>
            <Typography variant='h6' className="title">
                Sales
            </Typography>
            <div className="revenue">
                <h3>$2,415</h3>
                <p>-11,4 
                    <span><ArrowDownward style={{fontSize :"1rem", color : "red"}}/></span>
                </p>
            </div>
            <Typography variant='subtitle1' className="month">
                Compared to last month
            </Typography>
        </Box>
        <Box>
            <Typography variant='h6' className="title">
                Cost
            </Typography>
            <div className="revenue">
                <h3>$2,415</h3>
                <p>+11,4 
                    <span><ArrowUpward style={{fontSize :"1rem", color : "green"}}/></span>
                </p>
            </div>
            <Typography variant='subtitle1' className="month">
                Compared to last month
            </Typography>
        </Box>
    </Container>
  );
};

export default Revenue;

const Container = styled.div`
    margin-top: 0.8rem;
    display : grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap : 2rem;
`
const Box = styled.div`
    width : 100%;
    box-shadow: 0px 0px 6px -1px black;
    padding : 1rem;
    .revenue{
        display : flex;
        gap : 0.5rem;
        padding: 0.5rem 0;
        p{
            font-size: 0.9rem;
            display : flex;
            align-items: center;
        }
        h3{
            font-size: 1.4rem;
        }
    }
    .title{
        font-size: 0.9rem;
    }
    .month{
        font-size: 0.8rem;
    }
`