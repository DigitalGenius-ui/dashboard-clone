import React from 'react';
import styled from 'styled-components';
import Revenue from '../components/Revenue/Revenue';
import Chart from '../components/chart/Chart';
import { userData } from '../components/chart/ChartData';
import NewMembers from '../components/joinMembers/NewMembers';

const Home = () => {
  return(
    <Container>
      <Revenue/>
      <Chart
        data={userData}
        dataKey="Active user"
        title = "User Analytics"
        grid
      />
      <NewMembers/>
    </Container>
  );
};

export default Home;

const Container = styled.div``