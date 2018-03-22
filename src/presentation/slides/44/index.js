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
      <div>
        <Heading className={style.bigItem}>
          <code>takeLatest</code>
        </Heading>
        <Text className={style.item}>
          <i>means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one</i>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
