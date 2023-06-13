import styles from './Home.module.css';
import ProjetoHome from './ProjetoHome';
import imagemProjetoSamhost from '../assets/imagemProjetoSamhost.jpg';
import imagemProjetoOnePage from '../assets/imagemProjetoOnePage.jpg';
import imagemProjetoEmBreve from '../assets/imagemProjetoEmBreve.jpg';
import RetratoBg from './RetratoBg';
import React from 'react';
import Introducao from './Introducao';
import { Routes, Route } from 'react-router-dom';
import Sobre from './Sobre';
import ContatoLateral from './ContatoLateral';

const Home = () => {
  /* animacao do retrato */
  const retrato = React.useRef();
  React.useEffect(() => {
    setTimeout(() => {
      retrato.current.style.right = 0;
      retrato.current.style.opacity = 1;
    }, 2500);
  }, []);

  return (
    <div className={styles.home}>
      {/* Introdução */}
      <Routes>
        <Route path="/" element={<Introducao />} />
        <Route path="/sobreMim" element={<Sobre />} />
      </Routes>
      <div className={styles.contatoLateral__mobile}>
        <ContatoLateral />
      </div>

      {/* Projetos recentes */}
      <div className={styles.home__projetosRecentes}>
        <h2 className={styles.home__projetosRecentes_titulo}>
          Últimos projetos
        </h2>
        <div className={styles.home__projetosRecentes_listaContainer}>
          <ul className={styles.home__projetosRecentes_lista}>
            <ProjetoHome
              site="https://site-samhost.vercel.app/index.html"
              url={imagemProjetoSamhost}
              titulo="Site Samhost"
            />
            <ProjetoHome
              site="https://onepage.com.br/"
              url={imagemProjetoOnePage}
              titulo="Site OnePage"
            />
            <ProjetoHome
              site="https://breve.com/"
              url={imagemProjetoEmBreve}
              titulo="Em breve..."
            />
          </ul>
        </div>
      </div>
      <div ref={retrato} className={styles.retratoBg}>
        <RetratoBg />
      </div>
    </div>
  );
};

export default Home;
