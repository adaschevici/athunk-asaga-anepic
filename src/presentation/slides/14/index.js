import React from 'react';
import { Slide, Heading } from 'spectacle';

import styles from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={styles.slideSize}
  >
    <div>
      <div className={styles.column}>
        <Heading size={1} className={styles.thunk}>
          Thunks
        </Heading>
        <Heading size={1} className={styles.saga}>
          Sagas
        </Heading>
        <Heading size={1} className={styles.epic}>
          Epics
        </Heading>
      </div>
      <Handle />
    </div>
  </Slide>
);
