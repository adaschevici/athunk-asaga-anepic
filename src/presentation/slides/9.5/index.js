import React from 'react';
import { Slide, Image } from 'spectacle';

import style from './style.scss';
import preloader from 'spectacle/lib/utils/preloader';

const notes = `As our applications grow we will want to understand how the state flows
  so that we can understand and reason about the functionality`;

const images = {
  debug: require('../../../assets/lets_debug.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    notes={notes}
  >
    <Image
      src={images.debug.replace('/', '')}
      className={style.debug}
    />
  </Slide>
);
