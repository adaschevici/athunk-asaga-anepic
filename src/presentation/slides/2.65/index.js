import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './style.scss';
import Handle from '../../utils/handle';

const images = {
  redux: require('../../../assets/redux.png'),
};

preloader(images);

const notes = `Before we begin`;

export default (
  <Slide
    transition={[]}
    className={styles.slideSize}
  >
    <div>
      <div className={styles.column}>
        <Heading size={1} className={styles.title}>
          Before we begin ...
        </Heading>
      </div>
      <Handle />
    </div>
  </Slide>
);
