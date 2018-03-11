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
      <List >
        <Appear>
          <ListItem className={style.item}>
            Component State
            <Appear>
              <Text className={style.subtext}>
                <i>setting internal state in the component, in React it's all about the </i>
                <code>state </code>
                <i>object and the </i>
                <code>setState </code>
                <i>method</i>
              </Text>
            </Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem className={style.item}>
            Relative State
            <Appear>
              <Text>
                <i>this is state that you pass in through </i>
                <code>props </code>
                <i>from parent to child</i>
              </Text>
            </Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem className={style.item}>
            Provided State
            <Appear>
              <Text>set stete</Text>
            </Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem className={style.item}>
            External State
            <Appear>
              <Text>set stete</Text>
            </Appear>
          </ListItem>
        </Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
