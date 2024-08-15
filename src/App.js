import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Main from './Main';
import Section from './Section';
import Collections from './Collections';
import Footer from './Footer';
/*import ShoppingCart from './ShoppingCart';*/



function App() {
  return (
    <div className="App">
      
     
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/main' element={<Main/>} />
         <Route path='/Section' element={<Section/>} />
         <Route path='/collections' element={<Collections/>} />
         <Route path='/footer' element={<Footer/>} />
       </Routes>
    </div>
   
    
  );
}
/*
const router = ()=> createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
      {
        path: "/Main",
        element: <Main />,
      },
    
  
]);


  return <RouterProvider router={router} />*/

export default App;

