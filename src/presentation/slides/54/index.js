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
        className={style.epic}
      >
        Epics
      </Heading>
      <Heading
				size={4}
        className={style.subtitle}
      >
        <i>(benefits)</i>
      </Heading>
      <List>
				<Appear>
					<ListItem className={style.item}>
            <i>The means to use reactive programming and composition to create async effects that dispatch actions to your redux reducer(s)</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>A straight-forward path for canceling those async actions via reactive composition</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
