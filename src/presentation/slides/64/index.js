import React from 'react';
import { Slide, Appear, Heading, List, ListItem } from 'spectacle';
import style from './style.scss';
import preloader from "spectacle/lib/utils/preloader";

import Handle from '../../utils/handle';
import PhotoCredit from '../../utils/photo-credit';

const images = {
  testability: require('../../../assets/tests.jpg'),
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
      Testability
    </Heading>
    <List>
      <Appear>
        <ListItem className={style.item}>
          <i>given that epics are based off of Observables and streams they are never really done so they require a special strategy for testing kudos of Stu Kennedy</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem className={style.item}>
          <i>for sagas it is straightforward and not very elegant but it works and it is testing the action dispatching flows correctly</i>
        </ListItem>
      </Appear>
    </List>
    <PhotoCredit text={"Photo by Maik Jonietz on Unsplash"} />
    <Handle />
  </Slide>
);
