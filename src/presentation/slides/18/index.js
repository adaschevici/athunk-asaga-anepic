import React from 'react';
import { Slide, Heading } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.titleGreen}
      >
        Thunks
      </Heading>
      <Heading
        className={style.titleRed}
      >
        and
      </Heading>
      <Heading
        className={style.titleBlue}
      >
        Redux
      </Heading>
      <Handle />
    </div>
  </Slide>
);
