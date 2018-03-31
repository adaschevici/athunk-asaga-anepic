import React from 'react';
import { Slide, Heading } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `We can either structure our state through the way it works,
  or what it represents in the grander scheme of your apps state management.
  you will most likely prefer to think of your state management in this way as 
  it provides betterseparation than the layer organization of state`;

export default (
  <Slide
    transition={[]}
    className={style.slideSize}
    notes={notes}
  >
    <div>
      <Heading size={1} className={style.title}>
        <div className={style.titlepart}>Semantics</div>
        <div classeName={style.titlepart}>VS</div>
        <div className={style.titlepart}>Implementation</div>
      </Heading>
      <Handle />
    </div>
  </Slide>
);
