import React from 'react';
import { Slide, Appear, Heading, Image } from 'spectacle';
import styles from './css.scss';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  iceCube: require('../../../assets/ice-cube.png'),
  iceCubeMelting: require('../../../assets/ice-cube-melting.png'),
  leftArrow: require('../../../assets/left-arrow.png'),
  steam: require('../../../assets/steam.png'),
};

preloader(images);

const notes = `State is a wonderful thing. In Physics and chemistry its all about
  substances transitioning state. Everyone is or should be aware of state transitions.
  We have ice transitioning to water transitioning to steam and that is all fine and great.
  It's all quite happy and miraculous`;

export default (
  <Slide transition={["zoom", "slide"]} transitionDuration={500} bgColor="primary">
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
