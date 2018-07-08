import React from 'react';
import { Slide } from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  atomic: require('../../../assets/atomic-blow.jpg'),
};

preloader(images);

const notes = `We try to make good analogies however more often than not we fail`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    bgImage={images.atomic}
    notes={notes}
  />
);
