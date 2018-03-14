import React from 'react';
import { Slide, Heading, Text, Appear, Image, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  asyncronicity: require('../../../assets/async-word.jpg'),
};

preloader(images);

const notes = `the way to handle async actions in your redux store such as api calls,
  time consuming operations (not ideal), we need to start talking about how to handle
  asynchronous actions in a modular way, thunks, sagas and epics are the best ways today`;

// If you have been using redux for a while, you have run into the problem of
// changing the state of your application using an async operation such as a timer or a HTTP request.
//
export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Image
        src={images.asyncronicity.replace("/", "")}
        className={style.asyncronicity}
      />
      <Handle />
    </div>
  </Slide>
);
