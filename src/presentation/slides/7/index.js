import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="control-semantic"
  >
    <div>
      <Heading
        className={style.title}
      >
        Control State
      </Heading>
      <Text className={style.subcontent}>
        <i>
          In contrast to the above two types of state, Control 
          state does not represent the application’s environment. 
          Instead, it refers to the state which the user has input 
          into the app. Form inputs, selected items, things like that.
        </i>
      </Text>
      <Handle />
    </div>
  </Slide>
);
