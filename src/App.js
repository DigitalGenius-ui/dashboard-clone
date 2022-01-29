import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Menu from './components/menuItems/Menu';
import Home from './components/menuItems/Home';

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
  align-items: center;
  gap : 0.5rem;
  .menu{
    flex : 1;
    background-color: rgba(0, 139, 219, 0.041);
    padding : 1rem;
  }
  .details{
    flex : 3.8;
  }
`
const Items = styled.div``