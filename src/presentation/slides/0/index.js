import React from 'react';
import { Slide, Appear, Heading, Image } from 'spectacle';
import styles from './style.scss';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  iceCube: require('../../../assets/ice-cube.png'),
  iceCubeMelting: require('../../../assets/ice-cube-melting.png'),
  leftArrow: require('../../../assets/left-arrow.png'),
  steam: require('../../../assets/steam.png'),
};

preloader(images);

const notes = `We are developers and as developers we love to draw analogies from
  nature and science, and basically everything. We have titles like architects,
  back office, front end that would have a completely different meaning if computers did not exists,
  and today I will talk to you a little bit about state in ReactJS`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    bgColor="primary"
    notes={notes}
  >
    <Appear>
      <Image
        src={images.iceCube.replace("/", "")}
        className={styles.iceCube}
      />
    </Appear>
    <Appear>
      <div>
        <Image
          src={images.leftArrow.replace("/", "")}
          className={styles.leftArrow}
        />
        <Image
          src={images.iceCubeMelting.replace("/", "")}
          className={styles.iceCubeMelting}
        />
      </div>
    </Appear>
    <Appear>
      <div>
        <Image
          src={images.leftArrow.replace("/", "")}
          className={styles.leftArrow2}
        />
        <Image
          src={images.steam.replace("/", "")}
          className={styles.steam}
        />
      </div>
    </Appear>
    <Appear>
      <Heading
        size={2}
        className={styles.title}
      >
        In nature these are peaceful
      </Heading>
    </Appear>
  </Slide>
);
