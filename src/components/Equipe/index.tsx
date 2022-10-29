import Carousel from 'react-elastic-carousel';
import { Container, Item } from "./styles";
import TitulosSec from '../TitulosSec';

import Image from 'next/image';
import avatar from '../../assets/img/eu.png';
import { useState } from 'react';



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { enableAutoPlay }, 
  { autoPlaySpeed: 1500 },
  { padding: 0, 10 }
];

function Equipe() {

  return (
    <>
      <Container data-aos="fade-up">
        <TitulosSec titulo1="Colaboradores" descricao1="Equipe"/>

        <section>
        <Carousel  breakPoints={breakPoints}>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
              <Item><Image src={avatar} alt="Eu" /></Item>
            </Carousel>                  
        </section> 
      </Container>
    </>
  )
}
export default Equipe;