import React from 'react';
import { Slide, Image, Heading } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";
import Handle from '../../utils/handle';
import style from './style.scss';

const images = {
  onFire: require('../../../assets/thisisfine.gif'),
};

preloader(images);

export default (
  <Slide
    transition={[]}
    className={style.slideSize}
  >
    <Image
      src={images.onFire.replace('/', '')}
      className={style.thisisfine}
      margin="0px auto 40px"
    />
    <Heading size={3}>
    <span role="img" aria-label="hankey">💩</span>
      we should add more state 
      <span role="img" aria-label="hankey">💩</span>
    </Heading>
    <Handle />
  </Slide>
);
