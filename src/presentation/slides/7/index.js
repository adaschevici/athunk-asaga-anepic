import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';
import preloader from '../../../../node_modules/spectacle/lib/utils/preloader';

const notes = `This type of state covers the seemingly simple 
  things like loading spinners and error messages. 
  These are used to manage HTTP results and side-effects.`

const images = {
  famguy: require('../../../assets/button-pushing-fmguy.png'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="control-semantic"
    notes={notes}
  >
    <div>
      <Heading
        className={style.title}
      >
        Control State
      </Heading>
      <Image
        src={images.famguy.replace('/', '')}
        margin="0px auto 40px"
        className={style.famguy}
      />
      <Handle />
    </div>
  </Slide>
);
