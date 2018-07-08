import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';
import preloader from 'spectacle/lib/utils/preloader';

const notes = `Data state covers information which your 
  application temporarily stores about the big wide world. 
  That is, it covers your business data.`

const images = {
  data: require('../../../assets/data.jpg'),
};
  
preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="data-semantic"
    notes={notes}
  >
    <div>
      <Heading
        className={style.title}
      >
        DATA
      </Heading>
      <Image
        src={images.data.replace('/', '')}
        margin="0px auto 40px"
        className={style.data}
      />
      <Handle />
    </div>
  </Slide>
);
