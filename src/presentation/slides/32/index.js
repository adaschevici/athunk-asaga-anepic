import React from 'react';
import { Slide, Image, Heading, Appear, Text } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  background: require('../../../assets/background.jpg'),
};

preloader(images);

const notes = `Sagas as a concept are based on a really cool microservices design pattern called surprisingy
  the saga pattern. It's all about doing smart error handling on multiple service requests`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <Heading size={1} className={style.saga}>
      Sagas
    </Heading>
    <Heading size={1} className={style.subtitle}>
      (continued)
    </Heading>
    <Appear>
      <Image
        src={images.background.replace("/", "")}
        className={style.background}
      />
    </Appear>
    <Handle />
  </Slide>
);
