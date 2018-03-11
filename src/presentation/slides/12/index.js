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
						<i>are appended to the</i> <code>dispatch</code> <i>methods of your store</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
						<i>you have access to all the store state by injecting</i> <code>getState</code>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>you can wait for responses to</i> <code>HTTP</code> <i>requests</i>
            <i> using Asynchronous Middleware</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
