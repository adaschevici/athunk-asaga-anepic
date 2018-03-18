import React from 'react';
import { Slide, Text, Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  stayClassy: require('../../../assets/stay-classy.jpg'),
};

preloader(images);

const backgroundStyle = {
  backgroundImage: `url(${images.stayClassy})`,
};

const stayClassyStyle = {
  width: "2800px",
  height: "550px",
  marginTop: "20%",
};

export default (
  <Slide
    transition={["slide", "spin"]}
    align="center flex-start"
    bgImage={images.stayClassy}
  >
    <Text size={1} textColor="secondary" style={{ color: "#716ada" }}>Stay Classy Bucharest</Text>
  </Slide>
);
