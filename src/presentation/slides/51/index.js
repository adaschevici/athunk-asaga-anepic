import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  epics: require('../../../assets/epics.png'),
};

preloader(images);

export default (
  <Slide
    transition={[]}
    className={style.slideSize}
  >
    <Heading size={1} className={style.epic}>
      Epics
    </Heading>
    <Image
      src={images.epics.replace("/", "")}
    />
    <Handle />
  </Slide>
);
