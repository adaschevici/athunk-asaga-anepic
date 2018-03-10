import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.title}
      >
        DATA
      </Heading>
      <Text>
      </Text>
      <Handle />
    </div>
  </Slide>
);
