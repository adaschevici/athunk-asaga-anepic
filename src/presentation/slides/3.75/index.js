import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './style.scss';
import Handle from '../../utils/handle';

const notes = `We can either structure our state through the way it works,
  or what it represents in the grander scheme of your Apps state management`;

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
