import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import './reset.css';
import './main.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
