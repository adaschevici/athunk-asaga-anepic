import React from 'react';
import { Slide, List, ListItem } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <List >
        <ListItem className={style.item}>Data</ListItem>
        <ListItem className={style.item}>Communication</ListItem>
        <ListItem className={style.item}>Control</ListItem>
        <ListItem className={style.item}>Session</ListItem>
        <ListItem className={style.item}>Location</ListItem>
      </List>
      <Handle />
    </div>
  </Slide>
);
