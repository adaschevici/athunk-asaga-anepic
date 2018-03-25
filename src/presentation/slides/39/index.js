import React from 'react';
import { Slide, Heading, Text } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `you can hijack the action functionality completely, you can cancel actions
  throttle, debounce`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.saga}
      >
        Sagas
      </Heading>
      <Heading
				size={4}
        className={style.subtitle}
      >
        <i>(continued - effects)</i>
      </Heading>
      <div>
        <Heading className={style.bigItem}>
          <code>take</code>
        </Heading>
        <Text className={style.item}>
          <i>pauses until action received</i>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
