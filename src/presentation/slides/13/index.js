import React from 'react';
import { Slide, Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  asyncronicity: require('../../../assets/async-word.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Image
        src={images.asyncronicity.replace("/", "")}
        className={style.asyncronicity}
      />
      <Handle />
    </div>
  </Slide>
);
