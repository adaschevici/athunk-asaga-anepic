import React from 'react';
import { Slide, Heading, Text, Appear, Image, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

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
        <i>(takeaways)</i>
      </Heading>
      <Appear>
        <div>
          <Text className={style.item}>
            <i>always handle your errors because it is as easy as writing a </i><code className={style.highlight}>catch</code><i> clause</i>
          </Text>
        </div>
      </Appear>
      <Handle />
    </div>
  </Slide>
);
