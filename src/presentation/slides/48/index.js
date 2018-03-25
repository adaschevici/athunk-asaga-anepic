import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

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
      <Appear>
        <div>
          <Text className={style.item}>
            <i>when some of the data you are requesting is not required for other requests you may want to make the requests non-sequentially</i>
          </Text>
        </div>
      </Appear>
      <Handle />
    </div>
  </Slide>
);
