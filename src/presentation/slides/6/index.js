import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="communication-semantic"
  >
    <div>
      <Heading
        className={style.title}
      >
        Communication State
      </Heading>
      <Text className={style.subcontent}>
        <i>
          This type of state covers the seemingly simple 
          things like loading spinners and error messages. 
          These are used to manage HTTP results and side-effects.
        </i>
      </Text>
      <Handle />
    </div>
  </Slide>
);
