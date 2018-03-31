import React from 'react';
import { Slide, Appear, Heading, List, ListItem } from 'spectacle';
import style from './style.scss';
import preloader from "spectacle/lib/utils/preloader";

import Handle from '../../utils/handle';
import PhotoCredit from '../../utils/photo-credit';

const images = {
  testability: require('../../../assets/questions.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    bgImage={images.testability}
    bgDarken={0.5}
  >
    <Heading
      className={style.func}
    >
      What Q's you should be asking...
    </Heading>
    <List>
      <Appear>
        <ListItem className={style.item}>
          <i>Does my team know </i> <code className={style.highlight}>RxJs</code><i>?</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem className={style.item}>
          <i>Is my team familiar with the Reactive Programming Paradigm?</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem className={style.item}>
          <i>Do I want my code to be accessible to somebody not familiar with Rx?</i>
        </ListItem>
      </Appear>
    </List>
    <PhotoCredit text={"Photo by Emily Morter on Unsplash"} />
    <Handle />
  </Slide>
);
