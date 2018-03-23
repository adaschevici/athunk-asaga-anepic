import React from 'react';
import { Slide, Appear, Heading, Image, List, ListItem } from 'spectacle';
import style from './style.scss';
import preloader from "spectacle/lib/utils/preloader";

import Handle from '../../utils/handle';
import PhotoCredit from '../../utils/photo-credit';

const images = {
  functionality: require('../../../assets/functionality.jpg'),
};

preloader(images);

const notes = `However in software engineering...not quite so much. If you don't manage state
  properly more often than not it will come back and haunt you`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    bgImage={images.functionality}
    bgDarken={0.5}
  >
    <Heading
      className={style.func}
    >
      Functionality
    </Heading>
    <List>
      <Appear>
        <ListItem className={style.item}>
          <i>epics have a lot of functionality from the </i><code className={style.highlight}>RxJs</code><i> library, this means a lot of composability features, mapping merging 
            waiting for results.</i> <code className={style.highlight}>RxJs</code> <i>is a very powerful library for working with streams</i>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem className={style.item}>
          <i>the vocabulary you can use with epics is more intuitive since the chaining needs to be seen as a flow</i>
        </ListItem>
      </Appear>
    </List>
    <PhotoCredit text={"Photo by Nicolas Thomas on Unsplash"} />
    <Handle />
  </Slide>
);
