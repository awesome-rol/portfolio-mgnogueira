import styles from './Contato.module.css';
import iconeGithub from '../assets/iconeGithub.svg';
import iconeLinkedin from '../assets/iconeLinkedin.svg';
import iconeWhatsapp from '../assets/iconeWhatsapp.svg';
import iconeEmail from '../assets/iconeEmail.png';
import RetratoBg from './RetratoBg';

const Contato = () => {
  return (
    <section className={styles.contato}>
      <div className={styles.contato__container}>
        <div className={styles.contato__container_redes}>
          <h2 className={styles.contato__titulo}>Minhas redes</h2>
          <div className={styles.contato__container_redes_linkedin}>
            <a
              href="https://www.linkedin.com/in/miguel-nogueira-a7b9a922a/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className={styles.contato__container_redes_icone}
                src={iconeLinkedin}
                alt="Ícone para o Linkedin de Miguel Nogueira"
              />
            </a>
            <div className={styles.contato__container_redes_textos}>
              <h3 className={styles.contato__container_redes_nome}>Linkedin</h3>
              <a
                target="_blank"
                className={styles.contato__container_redes_link}
                href="https://www.linkedin.com/in/miguel-nogueira-a7b9a922a/"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/miguel-nogueira-a7b9a922a/
              </a>
            </div>
          </div>
          <div className={styles.contato__container_redes_github}>
            <a
              href="https://github.com/awesome-rol"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className={styles.contato__container_redes_icone}
                src={iconeGithub}
                alt="Ícone para o Github de Miguel Nogueira"
              />
            </a>
            <div className={styles.contato__container_redes_textos}>
              <h3 className={styles.contato__container_redes_nome}>Github</h3>
              <a
                target="_blank"
                className={styles.contato__container_redes_link}
                href="https://github.com/awesome-rol"
                rel="noreferrer"
              >
                https://github.com/awesome-rol
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contato__container_comunicacao}>
          <h2 className={styles.contato__titulo}>Contate-me!</h2>
          <div>
            <div className={styles.contato__container_comunicacao_whatsapp}>
              <a
                href="https://wa.me/+5582988136875"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={styles.contato__container_comunicacao_icone}
                  src={iconeWhatsapp}
                  alt="Ícone para o Whatsapp de Miguel Nogueira"
                />
              </a>
              <div className={styles.contato__container_comunicacao_textos}>
                <h3 className={styles.contato__container_comunicacao_nome}>
                  Whatsapp
                </h3>
                <a
                  target="_blank"
                  className={styles.contato__container_comunicacao_link}
                  rel="noreferrer"
                  href="https://wa.me/+5582988136875"
                >
                  https://wa.me/+5582988136875
                </a>
              </div>
            </div>
            <div className={styles.contato__container_comunicacao_email}>
              <img
                className={styles.contato__container_comunicacao_icone}
                src={iconeEmail}
                alt="Ícone para o email de Miguel Nogueira"
              />
              <div className={styles.contato__container_comunicacao_textos}>
                <h3 className={styles.contato__container_comunicacao_nome}>
                  Email
                </h3>
                <p className={styles.contato__container_comunicacao_link}>
                  miguel.gomes1206@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.retratoBg__contato}>
        <RetratoBg />
      </div>
    </section>
  );
};

export default Contato;
