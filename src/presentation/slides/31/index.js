import React from 'react';
import { Slide, Heading, Appear, List, ListItem } from 'spectacle';

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
            <i>in trivial cases the thunks don't add too much overhead because if it's simple you need to catch a single</i> <code className={style.highlight}>fail</code>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>however you can wrap a lot of api calls in a single try block</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>when requests fail your code will jump in the catch and let you handle your failure in a smarter way</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
