import React from 'react';
import { Slide, Heading, Appear, List, ListItem } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

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
            <i>thunks enable us to avoid causing side-effects in actions, action creators, or components</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>anything impure is wrapped in a thunk for later use in middlewares</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>allowing for side-effects to happen only in middlewares lets our app stay pure</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
