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
          <code>takeEvery</code>
        </Heading>
        <Text className={style.item}>
          <i>will return results for all the calls triggered</i>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
