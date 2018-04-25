import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

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
        <ListItem className={style.item}>
          <i>A means of composing any actions together as individual streams with complex join operations like</i> <code className={style.highlight}>zip</code> <i>and</i> <code className={style.highlight}>combineWith</code>
        </ListItem>
      </List>
      <Handle />
    </div>
  </Slide>
);
