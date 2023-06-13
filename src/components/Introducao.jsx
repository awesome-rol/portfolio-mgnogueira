import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styles from './Introducao.module.css';
import ContatoLateral from './ContatoLateral';
import Botao from './Botao';
import React from 'react';

const Introducao = () => {
  const [cargo] = useTypewriter({
    words: ['Desenvolvedor Frontend.'],
  });

  const intro = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      intro.current.style.left = 0;
      intro.current.style.opacity = 1;
    }, 1);
  });

  return (
    <div ref={intro} className={styles.home__intro}>
      <div className={styles.home__intro_containerNomeRedes}>
        <h1 className={styles.home__intro_nome}>
          Oi! Meu nome é Miguel Nogueira e sou
        </h1>
        <div className={styles.contatoLateral}>
          <ContatoLateral />
        </div>
      </div>
      <h1 className={styles.home__intro_cargo}>
        <p style={{ display: 'none' }}>Desenvolvedor Frontend</p>
        {cargo}
        <Cursor />
      </h1>
      <h2 className={styles.home__intro_descricao}>
        Trabalho com o desenvolvimento de sites em React.JS e busco sempre
        trazer o máximo de criatividade e personalidade em meus projetos!
      </h2>
      <Botao titulo="Meus projetos" link="/projetos" />
    </div>
  );
};

export default Introducao;
