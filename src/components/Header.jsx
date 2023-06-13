import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import fotoPerfil from '../assets/fotoPerfil.jpeg';
import React from 'react';

const Header = () => {
  const [menuAtivo, setMenuAtivo] = React.useState(false);
  const navMobile = React.useRef();

  function menuModal() {
    setMenuAtivo(!menuAtivo);
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__perfil}>
        <img
          className={styles.header__perfil_foto}
          src={fotoPerfil}
          alt="Foto de perfil, Miguel Nogueira"
        />
        <h1 className={styles.header__perfil_nome}>Miguel Nogueira</h1>
      </div>

      {/* Menu mobile */}
      <button onClick={menuModal} className={styles.header__menuToggle}>
        <div className={styles.header__menuToggle_linha1}></div>
        <div className={styles.header__menuToggle_linha2}></div>
        <div className={styles.header__menuToggle_linha3}></div>
      </button>

      {menuAtivo && (
        <nav ref={navMobile} className={styles.header__navMobile}>
          <ul className={styles.header__navMobile_lista}>
            <li className={styles.header__navMobile_lista_item}>
              <Link
                onClick={menuModal}
                className={styles.header__navMobile_lista_item}
                to="/"
              >
                Ínicio
              </Link>
            </li>
            <li className={styles.header__navMobile_lista_item}>
              <Link
                onClick={menuModal}
                className={styles.header__navMobile_lista_item}
                to="/sobreMim"
              >
                Sobre Mim
              </Link>
            </li>
            <li className={styles.header__navMobile_lista_item}>
              <Link
                onClick={menuModal}
                className={styles.header__navMobile_lista_item}
                to="/projetos"
              >
                Projetos
              </Link>
            </li>
            <li className={styles.header__navMobile_lista_item}>
              <Link
                onClick={menuModal}
                className={styles.header__navMobile_lista_item}
                to="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Fim do menu mobile */}
      <nav className={styles.header__menuNav}>
        <ul className={styles.header__menuNav_lista}>
          <li>
            <Link className={styles.header__menuNav_item} to="/">
              Ínicio
            </Link>
          </li>
          <li>
            <Link className={styles.header__menuNav_item} to="/sobreMim">
              Sobre mim
            </Link>
          </li>
          <li>
            <Link className={styles.header__menuNav_item} to="/projetos">
              Projetos
            </Link>
          </li>
          <li>
            <Link className={styles.header__menuNav_item} to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
