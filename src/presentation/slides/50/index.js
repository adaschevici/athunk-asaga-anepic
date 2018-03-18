import React from 'react';
import { Slide, Image, Heading, Appear, Text } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  cat: require('../../../assets/funny-cat.jpg'),
};

preloader(images);

const notes = `Sagas are the way to do side effects in your redux apps
  they allow for pretty fancy side effects management. It is the current
  de facto way to deal with your side effects and async state and it is
  an overall quite awesome library`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <Heading size={1} className={style.saga}>
      Sagas
    </Heading>
    <Image
      src={images.cat.replace("/", "")}
      className={style.background}
    />
    <Handle />
  </Slide>
);
