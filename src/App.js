import './App.css';
import Header from './components/header/Header';
import styled from 'styled-components';
import Menu from './components/menuItems/Menu';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Users } from './pages/Users';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Flex>
        <div className='menu'>
          <Menu/>
        </div>
        <Items className='details'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path= "/user" element={<Users/>} />
          </Routes>
        </Items>
      </Flex>
      </BrowserRouter>
    </>
  );
}

export default App;

const Flex = styled.div`
  display : flex;
  gap : 0.5rem;
  width : 100%;
  padding-right: 0.8rem;
  .menu{
    flex : 1;
  }
  .details{
    flex : 3.4;
  }
`
const Items = styled.div``