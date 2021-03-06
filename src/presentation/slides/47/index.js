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
        <i>(takeaways)</i>
      </Heading>
      <div>
        <Text className={style.item}>
          <i>use put to dispatch actions from your sagas</i>
        </Text>
      </div>
      <div>
        <Text className={style.item}>
          <i>wrap your </i><code className={style.highlight}>AJAX</code><i>-y requests in </i><code className={style.highlight}>call</code> <i>to wait for the result</i>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
