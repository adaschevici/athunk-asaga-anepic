import React from 'react';
import { Slide, Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';

const images = {
  birdieTeam: require('../../../assets/birdie-team.jpeg'),
  birdie: require('../../../assets/birdie.jpg'),
};

preloader(images);

const notes = `I work in a startup where we aim to provide families with a system that   allows them to have peace of mind about their loved ones as they grow old.`;

export default (
  <Slide
    transition={["slide", "spin"]}
    transitionDuration={1000}
    bgImage={images.birdieTeam.replace("/", "")}
    notes={notes}
  >
    <div style={{ display: "flex", flexDirection: "row", height: "25.000em", width: "21.875em" }}>
      <Image
        src={images.birdie.replace("/", "")}
        className={style.birdie}
      />
    </div>
  </Slide>
);
