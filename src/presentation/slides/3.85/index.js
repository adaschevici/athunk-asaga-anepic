import React from 'react';
import { Slide, Heading, Appear, Image } from 'spectacle';

import style from './style.scss';
import preloader from 'spectacle/lib/utils/preloader';

const notes = `As our applications grow we will want to understand how the state flows
  so that we can understand and reason about the functionality`;

const images = {
  timessquarehuge: require('../../../assets/times_square_state_overdone.jpg'),
  waldo: require('../../../assets/waldo.jpg'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    transitionDuration={500}
    notes={notes}
    bgImage={images.timessquarehuge}
  >
    <Appear>
      <Heading size={1} className={style.title}>
        <div className={style.titlepart}>Where is Waldo?</div>
      </Heading>
    </Appear>
    <Appear
      transitionDuration="4000"
      startValue={{ opacity: 0.3 }}
      endValue={{ opacity: 1 }}
    >
      <Image
        src={images.waldo.replace('/', '')}
        margin="0px auto 40px"
        className={style.waldo}
      />
    </Appear>
  </Slide>
);
