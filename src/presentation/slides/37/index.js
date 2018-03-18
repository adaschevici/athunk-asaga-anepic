import React from 'react';
import { Slide, Image, Heading, Appear, Text } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  specialFX: require('../../../assets/special-effects.jpeg'),
};

preloader(images);

const notes = `Generators are the basic building blocks for sagas
  and they are quite interesting to work with however sagas bring a few
  more tools to the table called effects and those are really special`;

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
    <Image
      src={images.specialFX.replace("/", "")}
      className={style.background}
    />
    <Appear>
      <div>
        <Text className={style.firstBubble}>Get it ?</Text>
      </div>
    </Appear>
    <Handle />
  </Slide>
);
