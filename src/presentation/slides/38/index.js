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
        <i>(continued - effects)</i>
      </Heading>
      <Appear>
        <Heading className={style.bigItem}>
          <code>fork</code>
        </ListItem>
      </Appear>
      <Appear>
        <Text className={style.item}>
          <i>performs a non-blocking operation on the function passed</i>
        </Text>
      </Appear>
      <Handle />
    </div>
  </Slide>
);
