import './App.css';
import { Home } from './pages/home/home';
import { Route, Routes } from 'react-router-dom'
import { Products } from './pages/products/products'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={ <Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
