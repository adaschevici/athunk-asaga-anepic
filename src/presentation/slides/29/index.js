import React from 'react';
import { Slide, Image, Heading, Appear, Text } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  callbackhell: require('../../../assets/callbackhell.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={[]}
    className={style.slideSize}
  >
    <Heading size={1} className={style.saga}>
      Sagas
    </Heading>
    <Heading size={1} className={style.subtitle}>
      (continued)
    </Heading>
    <Image
      src={images.callbackhell.replace("/", "")}
      className={style.callback}
    />
    <Handle />
  </Slide>
);
