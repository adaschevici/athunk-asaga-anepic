import React from 'react';
import { Slide, Text, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import css from './css.scss';

const images = {
  kat: require('../../../assets/kat.png'),
};

preloader(images);

const stayClassyStyle = {
  width: "2800px",
  height: "550px",
  marginTop: "20%",
};

const midScreen = {
  marginLeft: '40%',
};

export default (
  <Slide
    transition={[]}
  >
    <Heading className={css.title}>
      Wait huweet?
    </Heading>
  </Slide>
);
