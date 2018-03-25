import React from 'react';
import { Slide, Image, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  epics: require('../../../assets/epics.png'),
  redux: require('../../../assets/redux.png'),
  confused: require('../../../assets/confused.png'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <Image
      src={images.epics.replace("/", "")}
    />
    <Image
      src={images.redux.replace("/", "")}
    />
    <Appear>
      <Image
        src={images.confused.replace("/", "")}
        className={style.confused}
      />
    </Appear>
    <Handle />
  </Slide>
);
