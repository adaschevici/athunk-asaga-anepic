import React from 'react';
import { Slide, Image, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  epics: require('../../../assets/epics.png'),
  saga: require('../../../assets/saga-logo.png'),
  versus: require('../../../assets/versus.png'),
};

preloader(images);

const notes = `TBH i don't like the VS discussion and in my opinion most times it does not lead to
  good things 90% of the time. However in our particular case we can do a tiny mix and match of what
  they do so you can make up your mind whether one or the other is the right choice for you`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <Image
      src={images.epics.replace("/", "")}
    />
    <Image
      src={images.saga.replace("/", "")}
    />
    <Appear>
      <Image
        src={images.versus.replace("/", "")}
        className={style.versus}
      />
    </Appear>
    <Handle />
  </Slide>
);
