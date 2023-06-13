import styles from './ContatoLateral.module.css';
import iconeLinkedin from '../assets/iconeLinkedin.svg';
import iconeGithub from '../assets/iconeGithub.svg';
import iconeWhatsapp from '../assets/iconeWhatsapp.svg';

const ContatoLateral = () => {
  return (
    <nav className={styles.contatoLateral}>
      <ul className={styles.contatoLateral__lista}>
        <li className={styles.contatoLateral__lista_item}>
          <a
            href="https://www.linkedin.com/in/miguel-nogueira-a7b9a922a/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={iconeLinkedin}
              alt="Link para Linkedin de Miguel Nogueira"
            />
          </a>
        </li>
        <li className={styles.contatoLateral__lista_item}>
          <a
            href="https://github.com/awesome-rol"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconeGithub} alt="Link para Github de Miguel Nogueira" />
          </a>
        </li>
        <li className={styles.contatoLateral__lista_item}>
          <a
            href="https://wa.me/+5582988136875"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={iconeWhatsapp}
              alt="Link para whatsapp de Miguel Nogueira"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ContatoLateral;
