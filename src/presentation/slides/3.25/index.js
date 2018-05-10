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
        Component State
        <Text className={style.subtext}>
          <i>setting internal state in the component, in React it's all about the </i>
          <code className={style.highlighted}>state </code>
          <i>object and the </i>
          <code className={style.highlighted}>setState </code>
          <i>method</i>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
