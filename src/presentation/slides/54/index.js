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
      </List>
      <Handle />
    </div>
  </Slide>
);
