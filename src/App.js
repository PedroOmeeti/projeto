import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';
import Contato from './components/pages/Contato';
import { FaHome, FaRegUser, FaReact } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function App() {
  return (
    <div className='App'>
      
      
      
      <BrowserRouter>

        <ul className='menu'>
          <li><Link to="/"><FaHome />Home</Link></li>
          <li><Link to="/Sobre"><FaRegUser />Sobre</Link></li>
          <li><Link to="/Servicos"><FaReact />Serviços</Link></li>
          <li><Link to="/Contato"><CgMail />Contato</Link></li>
        </ul>

      {/* Começo Conteúdo */}

        <Routes className="centro">
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Sobre" element={<Sobre />}></Route>
          <Route path="/Servicos" element={<Servicos />}></Route>
          <Route path="/Contato" element={<Contato />}></Route>
        </Routes>

      {/* Fim Conteúdo */}

        
      
      </BrowserRouter>

      <h5 className='rodape'>Rodapé muito maneiro espetacular brutal insanamente bom</h5>







    </div>
  );
}

export default App;
