import React from 'react';
import { Slide, Heading } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `As our applications grow we will want to understand how the state flows
  so that we can understand and reason about the functionality`;

export default (
  <Slide
    transition={[]}
    className={style.slideSize}
    notes={notes}
  >
    <div>
      <Heading size={1} className={style.title}>
        <div className={style.titlepart}>Semantics</div>
        <div className={style.titlepart}>VS</div>
        <div className={style.titlepart}>Implementation</div>
      </Heading>
      <Handle />
    </div>
  </Slide>
);
