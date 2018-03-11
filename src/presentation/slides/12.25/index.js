import React from 'react';
import { Slide, Heading, Text, Appear, Image, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  middleware: require('../../../assets/middlewares-redux.jpg'),
};

preloader(images);

const notes = `you can hijack the action functionality completely, you can cancel actions
  throttle, debounce`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.title}
      >
        Middlewares
      </Heading>
      <Heading
				size={4}
        className={style.subtitle}
      >
        <i>(continued)</i>
      </Heading>
      <List>
				<Appear>
					<ListItem className={style.item}>
						<i>First it captures the previous state</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>The action is dispatched to the next middleware function</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>All downstream middleware functions in the chain are invoked</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>The reducer functions in the store are called with the action payload</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
