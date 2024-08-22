import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Topfive from './Topfive';
import Jewellery from './Jewellery';
import Allproducts from './Allproducts';
import Todo from './Todo'
import Top from './Top';

function App() {

  return (
    <div id='body'>
<div>
<Router>
  <Top/>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/Topfive' element={<Topfive />} />
    <Route path='/Jewellery' element={<Jewellery />} />
    <Route path='/Allproducts' element={<Allproducts />} />
    <Route path='/Todo' element={<Todo />} />
  </Routes>
</Router>
</div>

      <footer id='footer'>
        <p>©Copyright by Zarina.</p>
      </footer>

    </div>
  );
}

export default App;
