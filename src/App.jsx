import './App.css';
import SobreMi from './Pages/SOBREMI';
import MiPortafolio from './Pages/MiPortafolio';
import Contactame from './Pages/CONTACTAME';
import Error404 from './Pages/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './assets/COMPONENTES/Nav';
import Inicio from './assets/COMPONENTES/Inicio';


function App() {
  return (
    <>

      <BrowserRouter>
      <Nav/>
      
        <Routes>

          <Route path='/' element = {<Inicio/>} />
           <Route path='/SobreMi' element = {<SobreMi/>} />
          <Route path='/MiPortafolio' element = {<MiPortafolio/>} />
          <Route path='/Contactame' element = {<Contactame/>} />
          <Route path='/*' element = {<Error404/>} />
            
            
         
        </Routes>
      
      <Nav/>
      </BrowserRouter>
    
    
    <footer> <b>Todos los derechos reservados-Hecho por Jesus Guevara</b> </footer>
    </>
  )
  };
export default App;

