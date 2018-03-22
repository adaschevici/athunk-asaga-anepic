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
        className={style.title}
      >
        Thunks
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
						<i>lazy evaluation is pretty great</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>it allows for chaining method calls over and over</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>you can use <code className={style.highlight}>proxies</code>, <code className={style.highlight}>generators</code> and <code className={style.highlight}>getters</code> to implement lazy evaluation in JS</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
