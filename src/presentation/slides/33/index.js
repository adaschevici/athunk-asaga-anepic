import React from 'react';
import { Slide, Heading, Text, Appear, Image, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `you can hijack the action functionality completely, you can cancel actions
  throttle, debounce`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.saga}
      >
        Sagas
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
            <i>the saga pattern is a really useful pattern in microservices for handling smart reverts of already performed actions</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>book trip, pay, book a room, pay, book a flight, <b className={style.error}>flight booking fails</b></i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>so if we want to keep the customer happy and actually refund them...<b className={style.success}> sagas to the rescue</b></i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
