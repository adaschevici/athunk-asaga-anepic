import React from 'react';
import { Slide, Text, Appear } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `You can manage your state through
  the way the state for your components is stored.`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Appear>
        <div className={style.item}>
          Provided State
          <Appear>
            <Text className={style.subtext}>
              <i>state is passed on by providers </i>
              <i>by the component tree </i>
              <i>in React this is done via the </i>
              <code className={style.highlighted}>contextAPI </code>
              <i>new in React 16</i>
            </Text>
          </Appear>
        </div>
      </Appear>
      <Handle />
    </div>
  </Slide>
);
