import styles from './ProjetoHome.module.css';
import PropTypes from 'prop-types';

const ProjetoHome = ({ url, site, titulo }) => {
  ProjetoHome.propTypes = {
    url: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
  };
  return (
    <li className={styles.home__projetosRecentes_lista_item}>
      <a
        className={styles.home__projetosRecentes_lista_item_link}
        href={site}
        target="_blank"
        rel="noreferrer"
      >
        <div
          style={{ backgroundImage: `url(${url})` }}
          className={styles.home__projetosRecentes_lista_itemImg}
        ></div>
        <p className={styles.home__projetosRecentes_lista_itemTitulo}>
          {titulo}
        </p>
      </a>
    </li>
  );
};

export default ProjetoHome;
