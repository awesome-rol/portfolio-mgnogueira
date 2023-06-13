import { Link } from 'react-router-dom';
import styles from './Botao.module.css';
import PropTypes from 'prop-types';

const Botao = ({ titulo, link, target }) => {
  Botao.propTypes = {
    titulo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  };
  return (
    <Link to={link} target={target}>
      <button className={styles.botao}>{titulo}</button>
    </Link>
  );
};

export default Botao;
