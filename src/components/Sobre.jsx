import React from 'react';
import styles from './Sobre.module.css';

const Sobre = () => {
  const sobre = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      sobre.current.style.left = 0;
      sobre.current.style.opacity = 1;
    }, 1);
  }, []);

  return (
    <div ref={sobre} className={styles.sobreMim__container}>
      <p className={styles.sobreMim__habilidades}>
        Atualmente trabalho com:{' '}
        <b style={{ color: '#ffb703' }}>HTML, CSS, JavaScript e React.JS</b> e
        estou focado para crescer e aprender muito mais!
        <br />
        <br />
      </p>
      <p className={styles.sobreMim__texto}>
        Procuro trazer qualidade e foco nos projetos em que trabalho, acredito
        que através de percepção, compreensão e dedicação é possível criar seja
        lá qual for o cliente e projeto. Quando mais novo meu pai tinha uma
        empresa de ensino de informática e minha mãe administrava um negócio de
        artesanato. Creio que por ter crescido nesse ambiente empreendedor,
        tenho muito a agregar em qualquer projeto através de percepções que
        aprendi dentro dessa realidade.{' '}
        <br className={styles.sobreMim__quebraLinha} />
        <br className={styles.sobreMim__quebraLinha} /> Gosto muito de qualquer
        coisa relacionada a computadores e minha paixão me trouxe até o ramo da
        programação, fico muito feliz em aprender e compartilhar com as pessoas.{' '}
      </p>
    </div>
  );
};

export default Sobre;
