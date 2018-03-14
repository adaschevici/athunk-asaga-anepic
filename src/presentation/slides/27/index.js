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
    transition={[]}
    className={style.slideSize}
  >
    <Heading size={1} className={style.saga}>
      Sagas
    </Heading>
    <Text
      className={style.content}
    >
      redux-saga is a library that aims to make side effects 
      (i.e. asynchronous things like data fetching and impure 
      things like accessing the browser cache) in React/Redux 
      applications easier and better.
    </Text>
    <Handle />
  </Slide>
);
