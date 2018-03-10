import React from 'react';
import { Slide, List, ListItem, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
  >
    <div>
      <List >
        <Appear><ListItem className={style.item}>Data</ListItem></Appear>
        <Appear><ListItem className={style.item}>Communication</ListItem></Appear>
        <Appear><ListItem className={style.item}>Control</ListItem></Appear>
        <Appear><ListItem className={style.item}>Session</ListItem></Appear>
        <Appear><ListItem className={style.item}>Location</ListItem></Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
