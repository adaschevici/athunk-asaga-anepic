import React from 'react';
import { Slide } from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  epicSchema: require('../../../assets/epics-schematic.png'),
};

preloader(images);

const notes = `Schematic for epics is very similar if not identical to any other
  middleware. Similar to sagas the epics middleware consumes actions, however
  the functions available are those from RxJs. Knowing RxJS nad/or reactive programming
  is invaluable for using epics.`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    bgImage={images.epicSchema}
    notes={notes}
  >
  </Slide>
);
