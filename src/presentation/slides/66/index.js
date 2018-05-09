import React from 'react';
import { Slide, Heading } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";
import style from './style.scss';

const images = {
  stayClassy: require('../../../assets/stay-classy.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={["slide", "spin"]}
    align="center flex-start"
    bgImage={images.stayClassy}
  >
    <Heading
      size={1}
      textColor="secondary"
      className={style.caption}
    >
      Stay Classy London
    </Heading>
  </Slide>
);
