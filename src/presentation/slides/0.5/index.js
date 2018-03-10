import React from 'react';
import { Slide, Appear, Heading, Image } from 'spectacle';
import styles from './css.scss';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  atomic: require('../../../assets/atomic-blow.jpg'),
};

preloader(images);

const notes = `However in software engineering...not quite so much. If you don't manage state
  properly more often than not it will come back and haunt you`;

export default (
  <Slide transition={["zoom", "slide"]} transitionDuration={500} bgColor="primary">
    <Image
      src={images.atomic.replace("/", "")}
      className={styles.atomic}
    />
  </Slide>
);
