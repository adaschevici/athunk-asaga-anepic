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
            <i>A more explicit path to cancellation by calling</i> <code>unsubscribe</code> <i>on the subscription object returned from the dispatch</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);