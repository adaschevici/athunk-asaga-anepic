import React from 'react';
import { Slide, Text, Appear } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <div className={style.item}>
        Relative State
        <Appear>
          <Text className={style.subtext}>
            <i>this is state that you pass in through </i>
            <code className={style.highlighted}>props </code>
            <i>from parent to child</i>
          </Text>
        </Appear>
      </div>
      <Handle />
    </div>
  </Slide>
);
