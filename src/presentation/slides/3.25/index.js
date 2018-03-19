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
          Component State
          <Appear>
            <Text className={style.subtext}>
              <i>setting internal state in the component, in React it's all about the </i>
              <code className={style.highlighted}>state </code>
              <i>object and the </i>
              <code className={style.highlighted}>setState </code>
              <i>method</i>
            </Text>
          </Appear>
        </div>
      </Appear>
      <Handle />
    </div>
  </Slide>
);
