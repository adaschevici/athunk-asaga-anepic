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
        className={style.title}
      >
        Thunks
      </Heading>
      <Heading
				size={4}
        className={style.subtitle}
      >
        <i>(final)</i>
      </Heading>
      <List>
				<Appear>
					<ListItem className={style.item}>
            <i>you could use thunks for all your side effects</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>you don't need to use anything else</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>you could chain </i> <code className={style.highlight}>thens</code> <i>over until  you get bored</i>
					</ListItem>
				</Appear>
        <Appear>
					<ListItem className={style.item}>
            <i>you could use</i> <code className={style.highlight}>Promise</code> <i>thunks and chain</i> <code className={style.highlight}>thens</code> <i>after you </i><code className={style.highlight}>dispatch</code>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
