import React from 'react';
import { Slide, Heading } from 'spectacle';
import styles from './style.scss';

const notes = `But i would not take myself too seriously, we need to make some fun of our youthful naivitae.
  and that is why the title of my talk starts with a joke and it goes a little bit like this`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    bgColor="primary"
    notes={notes}
    id="title"
  >
    <Heading
      className={styles.title}
    >
      A <i>thunk</i>, a <i>saga</i> and an <i>epic</i> walk into a bar...
    </Heading>
  </Slide>
);
