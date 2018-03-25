import React from 'react';
import { Slide, Heading, Text } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';


export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <div className={style.column}>
        <Heading size={3} className={style.title}>
          Thunks
        </Heading>
        <Text className={style.content}>
          The precise definition of a “thunk” varies across contexts. Generally though, thunks are a functional programming technique used to delay computation. Instead of performing some work now, you produce a function body or unevaluated expression (the “thunk”) which can optionally be used to perform the work later.
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
