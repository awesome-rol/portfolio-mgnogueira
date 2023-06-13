import styles from './RetratoBg.module.css';
import retratoBg from '../assets/retratoBg.png';

const RetratoBg = () => {
  return (
    <img
      className={styles.retrato}
      src={retratoBg}
      alt="Foto de Miguel Nogueira"
    />
  );
};

export default RetratoBg;
