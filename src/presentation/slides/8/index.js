import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="session-semantic"
  >
    <div>
      <Heading
        className={style.title}
      >
        Control State
      </Heading>
      <Text className={style.subcontent}>
        <i>
          When you have information which needs 
          to be available application-wide, but 
          its shape is less well defined than your 
          project’s schedule, it is probably Session state.
        </i>
      </Text>
      <Handle />
    </div>
  </Slide>
);
