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
      'Este foi um site que fiz para vendas de produtos de rádio e TV, foi o meu primeiro projeto e fiz o design (inclusive a logomarca) e todas as funcionalidades do zero, uma característica interessante desse projeto foi que haviam muitas informações exibidas repetidamente em cada produto no site anterior, então foi uma ótima oportunidade para exercitar e aprender muitas coisas sobre criatividade e organização. As tecnologias que usei foram: HTML5, CSS3 e JavaScript',
    alternativo: 'Site feito por Miguel Nogueira',
    link: 'https://site-samhost.vercel.app/index.html',
  },
  {
    id: 'onepage',
    titulo: 'Site OnePage',
    imagem: mockupOnePage,
    descricao:
      'Este é um projeto onde o cliente solicitou um site que reunisse funcionalidades de rádio, TV e anúncios em uma só página, foi o meu primeiro projeto utilizando de forma focada o React.JS, foi ele que me criou interesse por estudar mais e criar projetos mais complexos utilizando o framework, inclusive, cheguei a aprender um pouco de integração com backend, já que tive que conectar o site de alguma forma com os servidores de músicas, streaming de TV e de rádio. Neste projeto utilizei: HTML5, CSS3 Modules e React.JS.',
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
    link: 'https://portfolio-mgnogueira.vercel.app',
  },
];

const Projetos = () => {
  const [modal, setModal] = React.useState(false);
  const modalDiv = React.useRef();

  function abrirModal() {
    setModal(!modal);
  }
  return (
    <section className={styles.projetos}>
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
                <Botao link={item.link} titulo="Ver" />
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
    </section>
  );
};

export default Projetos;
