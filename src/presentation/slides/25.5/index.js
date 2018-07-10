import React from 'react';
import { Slide, Image } from 'spectacle';

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
    <Image
      src={images.mindblown.replace("/", "")}
      className={style.mindblown}
    />
    <Handle />
  </Slide>
);
