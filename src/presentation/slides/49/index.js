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
          <i>always handle your errors because it is as easy as writing a </i><code className={style.highlight}>catch</code><i> clause</i>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
