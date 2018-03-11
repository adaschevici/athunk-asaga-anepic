import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './style.scss';
import Handle from '../../utils/handle';


export default (
  <Slide
    transition={[]}
    className={styles.slideSize}
  >
    <div>
      <div className={styles.column}>
        <Heading size={3} className={styles.title}>
          Thunks
        </Heading>
      </div>
      <Handle />
    </div>
  </Slide>
);
