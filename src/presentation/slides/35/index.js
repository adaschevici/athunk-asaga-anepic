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
        <i>(continued)</i>
      </Heading>
      <List>
				<Appear>
					<ListItem className={style.item}>
            <i>sagas are implemented using </i><code>generators</code><i>, functions that can pause or resume from outside</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>the controlling function is the iterator through </i> <code>next()</code> <i>and</i> <code>throw()</code>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
