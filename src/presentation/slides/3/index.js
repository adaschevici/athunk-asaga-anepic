import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './style.scss';
import Handle from '../../utils/handle';

const images = {
  redux: require('../../../assets/redux.png'),
};

preloader(images);

export default (
  <Slide
    transition={[]}
    className={styles.slideSize}
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
