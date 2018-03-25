import React from 'react';
import { Slide, Appear, Heading, List, ListItem } from 'spectacle';
import style from './style.scss';
import preloader from "spectacle/lib/utils/preloader";

import Handle from '../../utils/handle';
import PhotoCredit from '../../utils/photo-credit';

const images = {
  usability: require('../../../assets/usability.jpg'),
};

preloader(images);

const notes = `For example we may have an observable that is composed of two other observables,
  and instead of Observable.merge you use Observable.of, seems similar but it isn't. In sagas things are more
  sequential which allows you to make a bit more sense out of the flow.`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    bgImage={images.usability}
    bgDarken={0.7}
    notes={notes}
  >
    <Heading
      className={style.func}
    >
      Usability
    </Heading>
    <List>
      <Appear>
        <ListItem className={style.item}>
          <i>the composability of epics and the magic comes from</i> <code className={style.highlight}>RxJs.</code>
          <i> It is a library in its own right which means you need to be somewhat proficient with it if you want to be able to take full advantage of it</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem className={style.item}>
          <i>sometimes the error reporting is not the best, and some actions can wind up not being handled properly</i>
        </ListItem>
      </Appear>
    </List>
    <PhotoCredit text={"Photo by Hal Gatewood on Unsplash"} />
    <Handle />
  </Slide>
);
