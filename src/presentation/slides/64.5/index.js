import React from 'react';
import { Slide, Appear, Heading, Image, List, ListItem } from 'spectacle';
import style from './style.scss';
import preloader from "spectacle/lib/utils/preloader";

import Handle from '../../utils/handle';
import PhotoCredit from '../../utils/photo-credit';

const images = {
  testability: require('../../../assets/take-away.jpg'),
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
      Take Away(s)
    </Heading>
    <List>
      <Appear>
        <ListItem className={style.item}>
          <i>Currently I use and like Sagas. They are quite obvious to use for me</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem className={style.item}>
          <i>I feel that some functions are not as straight forward when using sagas, such as cancelling actions</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem className={style.item}>
          <i>I find the code you can write using Epics is very expressive</i>
        </ListItem>
      </Appear>
    </List>
    <PhotoCredit text={"Photo by Clem Onojeghuo on Unsplash"} />
    <Handle />
  </Slide>
);
