import styles from './Projetos.module.css';
import mockupSamhost from '../assets/mockupSamhost.png';
import mockupOnePage from '../assets/mockupOnePage.png';
import mockupPortfolio from '../assets/mockupPortfolio.png';
import iconeInfo from '../assets/iconeInfo.png';
import Botao from './Botao';
import RetratoBg from './RetratoBg';
import ContatoLateral from './ContatoLateral';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';
import React from 'react';

const listaProjetos = [
  {
    id: 'samhost',
    titulo: 'Site Samhost',
    imagem: mockupSamhost,
    descricao:
      'Esta foi uma repaginação que fiz para vendas de produtos de rádio e TV, fiz o design (inclusive logomarca) e todas as funcionalidades do zero, haviam muitas informações exibidas repetidamente em cada produto no site anterior, pude exercitar e aprender muitas coisas sobre criatividade e organização. As tecnologias que usei foram: HTML5, CSS3 e JavaScript',
    alternativo: 'Site feito por Miguel Nogueira',
    link: 'https://site-samhost.vercel.app/index.html/',
  },
  {
    id: 'onepage',
    titulo: 'Site OnePage',
    imagem: mockupOnePage,
    descricao:
      'Este é um projeto onde o foi solicitado um site que reunisse funcionalidades de rádio, TV e anúncios em uma só página, pude exercitar de forma focada o React.JS, aprendi também um pouco sobre integração com backend. Neste projeto utilizei: HTML5, CSS3 Modules e React.JS.',
    alternativo: 'Site feito por Miguel Nogueira',
    link: 'https://site-onepage.vercel.app/',
  },
  {
    id: 'portfolio',
    titulo: 'Meu portfólio',
    imagem: mockupPortfolio,
    descricao:
      'Este que vus fala! Meu queridinho, o projeto em que fui livre para expressar as minhas ideias e colocar em prática muito do que aprendi! Ele foi produzido utilizando HTML5, CSS3 Modules e React.JS!',
    alternativo: 'Site feito por Miguel Nogueira',
    link: 'https://portfolio-mgnogueira.vercel.app/',
  },
];

const Projetos = () => {
  const [modal, setModal] = React.useState(false);
  const modalDiv = React.useRef();

  function abrirModal() {
    setModal(!modal);
  }

  function handleOutsideClick() {
    if (modal) {
      setModal(false);
    }
  }

  return (
    <div onClick={handleOutsideClick} className={styles.projetos}>
      <div className={styles.projetos__container}>
        <Carousel className="slider">
          {listaProjetos.map((item) => {
            return (
              <div key={item.id} className={styles.projetos__lista_item}>
                <h2 className={styles.projetos__lista_item_titulo}>
                  {item.titulo}
                </h2>
                <img
                  className={styles.projetos__lista_item_imagem}
                  src={item.imagem}
                  alt={item.alternativo}
                />
                <Botao link={item.link} titulo="Ver" target="_blank" />
                <button
                  onClick={abrirModal}
                  className={styles.projetos__lista_item_botaoInfo}
                >
                  <img
                    className={styles.projetos__lista_item_botaoInfo_imagem}
                    src={iconeInfo}
                    alt="Botão para exibir informações sobre o projeto"
                  />
                </button>
                {modal && (
                  <div
                    ref={modalDiv}
                    className={styles.projetos__lista_item_modal}
                  >
                    <p className={styles.projetos__lista_item_modal_texto}>
                      {item.descricao}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.contatoLateral__projetos}>
        <ContatoLateral />
      </div>
      <div className={styles.retratoBg__projetos}>
        <RetratoBg />
      </div>
    </div>
  );
};

export default Projetos;
