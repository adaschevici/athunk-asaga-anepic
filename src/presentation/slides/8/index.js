import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';
import preloader from '../../../../node_modules/spectacle/lib/utils/preloader';

const notes = `When you have information which needs 
  to be available application-wide, but 
  its shape is less well defined than your 
  project’s schedule, it is probably Session state.`

const images = {
  whoami: require('../../../assets/whoami.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="session-semantic"
    notes={notes}
  >
    <div>
      <Heading
        className={style.title}
      >
        Session State
      </Heading>
      <Image
        src={images.whoami.replace('/', '')}
        margin="0px auto 40px"
        className={style.whoami}
      />
      <Handle />
    </div>
  </Slide>
);