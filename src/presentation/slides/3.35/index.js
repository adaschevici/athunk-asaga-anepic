import React from 'react';
import { Slide, Heading, Text, Appear, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `You can manage your state through
  the way the state for your components is stored.`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Appear>
        <div className={style.item}>
          Relative State
          <Appear>
            <Text className={style.subtext}>
              <i>this is state that you pass in through </i>
              <code className={style.highlighted}>props </code>
              <i>from parent to child</i>
            </Text>
          </Appear>
        </div>
      </Appear>
      <Handle />
    </div>
  </Slide>
);