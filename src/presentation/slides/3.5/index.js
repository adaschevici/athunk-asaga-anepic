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
            Provided State
            <Appear>
              <Text className={style.subtext}>
                <i>state is passed on by providers </i>
                <i>by the component tree </i>
                <i>in React this is done via the </i>
                <code>contextAPI </code>
                <i>new in React 16</i>
              </Text>
            </Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem className={style.item}>
            External State
            <Appear>
              <Text className={style.subtext}>
                <i>state is mapped via redux state </i>
                <i>you can communicate to any component in your app via the redux store </i>
                <i>and </i><code>connect</code>
              </Text>
            </Appear>
          </ListItem>
        </Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
