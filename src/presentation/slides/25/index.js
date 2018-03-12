import React from 'react';
import { Slide, Heading, Text, Appear, Image, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  mindblown: require('../../../assets/tim-and-eric-mind-blown.gif'),
};

preloader(images);

const notes = `the way to handle async actions in your redux store such as api calls,
  time consuming operations (not ideal), we need to start talking about how to handle
  asynchronous actions in a modular way, thunks, sagas and epics are the best ways today`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
      <Heading
        className={style.title}
      >
        However you would deprive your mind from being...
      </Heading>
      <Image
        src={images.mindblown.replace("/", "")}
        className={style.mindblown}
      />
      <Handle />
  </Slide>
);
