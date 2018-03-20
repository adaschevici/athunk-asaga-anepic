import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './style.scss';
import Handle from '../../utils/handle';

const notes = `We can either structure our state through the way it works,
  or what it represents in the grander scheme of your apps state management.
  you will most likely prefer to think of your state management in this way as 
  it provides betterseparation than the layer organization of state`;

export default (
  <Slide
    transition={[]}
    className={styles.slideSize}
  >
    <div>
      <Heading size={1} className={styles.title}>
        Semantics VS Implementation
      </Heading>
      <Handle />
    </div>
  </Slide>
);
