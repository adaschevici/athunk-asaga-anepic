import React from 'react';
import { Slide, Heading, Text, Appear, Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  middleware: require('../../../assets/middlewares-redux.jpg'),
};

preloader(images);

const notes = ``;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.title}
      >
        Middlewares
      </Heading>
      <Image
        src={images.middleware.replace("/", "")}
        className={style.middleware}
      />
      <Handle />
    </div>
  </Slide>
);
