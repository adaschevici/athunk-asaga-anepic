import React from 'react';
import { Slide, Heading, Appear, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';
import PhotoCredit from '../../utils/photo-credit';

const images = {
  travel: require('../../../assets/flight-booking.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    bgImage={images.travel}
    bgDarken={0.5}
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
      <PhotoCredit text="Photo by Nils Nedel on Unsplash" />
    </div>
  </Slide>
);
