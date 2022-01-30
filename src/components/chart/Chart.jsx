import React from 'react';
import { Typography } from "@material-ui/core";
import styled from 'styled-components';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data, dataKey, title, grid }) => {

  return (
    <Container>
        <Typography variant='h5' className="title">
            {title}
        </Typography>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#032a97d6'/>
                <Line dataKey={dataKey} stroke='#147fc7' type="monotone"/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#3b3b3b36' strokeDasharray="5 5"/>}
            </LineChart>
        </ResponsiveContainer>
    </Container>
  );
};

export default Chart;

const Container = styled.div`
    box-shadow: 0px 0px 6px -1px black;
    margin-top: 1rem;
    padding : 1rem;
    .title{
        font-size: 0.9rem;
        font-weight: 600;
        padding-bottom: 1rem;
    }
`