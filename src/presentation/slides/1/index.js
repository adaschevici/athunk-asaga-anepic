import React from 'react';
import { Slide, Heading } from 'spectacle';
import styles from './css.scss';

const notes = `State is a wonderful thing. In Physics and chemistry its all about
  substances transitioning state. Everyone is or should be aware of state transitions.
  We have ice transitioning to water transitioning to steam and that is all fine and great.`;
export default (
  <Slide transition={["zoom", "slide"]} transitionDuration={500} bgColor="primary" id="title">
    <Heading
      className={styles.title}
    >
      A <i>thunk</i>, a <i>saga</i> and an <i>epic</i> walk into a bar...
    </Heading>
  </Slide>
);
