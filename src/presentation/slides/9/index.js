import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';
import preloader from '../../../../node_modules/spectacle/lib/utils/preloader';

const notes = `What counts as location? Intuitively, I’d say 
  “anything which you can give someone concrete directions to”. 
  Concretely: 
  Location state is that UTF-8 mess which appears in your URL bar.`

const images = {
  location: require('../../../assets/location.jpeg'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="location-semantic"
    notes={notes}
  >
    <div>
      <Heading
        className={style.title}
      >
        Location State
      </Heading>
      <Image
        src={images.location.replace('/', '')}
        margin="0px auto 40px"
        className={style.location}
      />
      <Handle />
    </div>
  </Slide>
);
