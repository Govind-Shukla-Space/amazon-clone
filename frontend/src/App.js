import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Orders from './components/Orders';
import CustomerCare from './components/CustomerCare';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>               
           <Routes>        
              <Route path ='/' element ={<Home/>} />                             
              <Route path ='/orders' element ={<Orders/>} />  
              <Route path ='/customercare' element ={<CustomerCare/>} />  
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
