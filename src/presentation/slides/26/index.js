import React from 'react';
import { Slide, Image, Heading } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  sagas: require('../../../assets/saga-logo.png'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <Heading size={1} className={style.saga}>
      Sagas
    </Heading>
    <Image
      src={images.sagas.replace("/", "")}
    />
    <Handle />
  </Slide>
);
