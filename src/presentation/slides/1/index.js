import React from 'react';
import { Slide, Heading } from 'spectacle';
import styles from './css.scss';

const notes = `But where would we be if we did not make some fun about that.`;

export default (
  <Slide transition={["zoom", "slide"]} transitionDuration={500} bgColor="primary" id="title">
    <Heading
      className={styles.title}
    >
      A <i>thunk</i>, a <i>saga</i> and an <i>epic</i> walk into a bar...
    </Heading>
  </Slide>
);
