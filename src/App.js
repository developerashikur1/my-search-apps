import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container style={{backgroundColor:'whitesmoke'}}>
    <Home style={{backgroundColor:'white'}}></Home>
    </Container>
  );
}

export default App;
