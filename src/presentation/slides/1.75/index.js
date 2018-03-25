import React from 'react';
import { Appear, Slide, Image, Heading } from 'spectacle';

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
    <Appear>
      <Image
        src={images.onFire.replace('/', '')}
        className={style.thisisfine}
        margin="0px auto 40px"
      />
    </Appear>
    <Heading size={3}>we need more state management</Heading>
    <Handle />
  </Slide>
);
