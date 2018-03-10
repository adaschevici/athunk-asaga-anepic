import React from 'react';
import { Slide, Image, Heading, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import styles from './css.scss';
import Handle from '../../utils/handle';

const images = {
  redux: require('../../../assets/redux.png'),
};
export default (
  <Slide
    transition={[]}
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
