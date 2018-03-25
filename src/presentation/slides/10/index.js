import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  emoji: require('../../../assets/important-emoji.png'),
};

preloader(images);

const notes = `The location state changes can cause changes in all other
  state parts of your app. It will cause side effects, async data to get pulled in
  from strange and weird places on the internet`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.title}
      >
        Side Effects
      </Heading>
      <Image
        src={images.emoji.replace("/", "")}
        className={style.emoji}
      />
      <Handle />
    </div>
  </Slide>
);
