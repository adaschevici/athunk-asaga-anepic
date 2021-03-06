import React from 'react';
import { Slide, Image, Heading } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './style.scss';
import Handle from '../../utils/handle';

const images = {
  redux: require('../../../assets/redux.png'),
};

preloader(images);

const notes = `But i am not really here to talk to you about my job but rather the challenges
  i face on a day to day using react. The thing that gets my goat is STATE. There are two ways to reason about state.
  The first one is the way it is implemented as in what level of the stack it is located at if you were to think MVC`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={styles.slideSize}
    notes={notes}
  >
    <div>
      <div className={styles.column}>
        <Heading size={1} className={styles.title}>
          STATE
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
