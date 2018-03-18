import React from 'react';
import { Slide, Image, Heading, Appear, Text } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  sagas: require('../../../assets/saga-logo.png'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <Heading size={1} className={style.epic}>
      Epics
    </Heading>
    <Text
      className={style.content}
    >
      Redux-observable is middleware for Redux that uses RxJS under the hood to turn every action emitted by your Redux app into an observable stream. 
      The core primitive of redux-observable is called an epic.
    </Text>
    <Handle />
  </Slide>
);
