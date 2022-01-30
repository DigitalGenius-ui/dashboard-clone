import './App.css';
import Header from './components/header/Header';
import styled from 'styled-components';
import Menu from './components/menuItems/Menu';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Flex>
        <div className='menu'>
          <Menu/>
        </div>
        <Items className='details'>
          <div >
            <Home/>
          </div>
        </Items>
      </Flex>
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