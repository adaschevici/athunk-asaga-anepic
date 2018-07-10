import React from 'react';
import { Slide, Heading } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  mindblown: require('../../../assets/tim-and-eric-mind-blown.gif'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
      <Heading
        size={1}
        className={style.title}
      >
        However you would prevent your mind from being...
      </Heading>
      <Handle />
  </Slide>
);
