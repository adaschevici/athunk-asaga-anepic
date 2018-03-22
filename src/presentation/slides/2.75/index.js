import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './style.scss';
import Handle from '../../utils/handle';

const images = {
  redux: require('../../../assets/redux.png'),
};

preloader(images);

const notes = `Before i start anything i would like to make sure and
  understand if everyone here is familiar wih redux, react and what state is.
  I will most likely also use ES6 syntax often so I want to set the expectations accordingly.`;

export default (
  <Slide
    transition={[]}
    className={styles.slideSize}
  >
    <div>
      <div className={styles.column}>
        <Heading size={1} className={styles.title}>
          Foolish assumptions I have made ...
        </Heading>
        <Image
          src={images.redux.replace("/", "")}
          className={styles.redux}
        />
      </div>
      <Handle />
    </div>
  </Slide>
);
