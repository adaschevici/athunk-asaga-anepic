import React from 'react';
import { Slide, Image, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  birdieTeam: require('../../../assets/birdie-team.jpeg'),
  birdie: require('../../../assets/birdie.jpg'),
};

preloader(images);

const avatarStyle = {
  position: 'absolute',
  marginTop: '30%',
  marginLeft: '35%',
  height: '60%',
  borderRadius: "18.750em",
};

const notes = `I work in a startup where we aim to provide families with a system that allows
  them to have peace of mind about their loved ones as they grow old.`;

export default (
  <Slide
    transition={["slide", "spin"]}
    transitionDuration={1000}
    bgImage={images.birdieTeam.replace("/", "")}
    notes={notes}
  >
    <div style={{ display: "flex", flexDirection: "row", height: "25.000em", width: "21.875em" }}>
      <Appear>
        <Image
          src={images.birdie.replace("/", "")}
          margin="0px auto 40px"
          style={avatarStyle}
        />
      </Appear>
    </div>
  </Slide>
);
