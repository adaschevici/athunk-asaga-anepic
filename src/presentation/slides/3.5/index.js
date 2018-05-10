import React from 'react';
import { Slide, Text } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <div className={style.item}>
        Provided State
        <Text className={style.subtext}>
          <i>state is passed on by providers </i>
          <i>by the component tree </i>
          <i>in React this is done via the </i>
          <code className={style.highlighted}>contextAPI </code>
          <i>new in React 16</i>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
