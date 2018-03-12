import React from 'react';
import { Slide, Heading, Text, Appear, Image, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  toolbox: require('../../../assets/toolbox.jpg'),
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
    <div>
      <Image
        src={images.toolbox.replace("/", "")}
        className={style.toolbox}
      />
      <Handle />
    </div>
  </Slide>
);
