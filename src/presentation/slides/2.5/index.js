import React from 'react';
import { Slide, Text, Image, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  birdieTeam: require('../../../assets/birdie-team.jpeg'),
  birdie: require('../../../assets/birdie.jpg'),
};

preloader(images);

const avatarStyle = {
  position: 'absolute',
  marginTop: '25%',
  marginLeft: '35%',
  height: '60%',
  borderRadius: "18.750em",
};

export default (
  <Slide
    transition={["slide", "spin"]}
    transitionDuration={1000}
    bgImage={images.birdieTeam.replace("/", "")}
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
