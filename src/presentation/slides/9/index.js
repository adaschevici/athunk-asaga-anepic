import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="location-semantic"
  >
    <div>
      <Heading
        className={style.title}
      >
        Control State
      </Heading>
      <Text className={style.subcontent}>
        <i>
          What counts as location? Intuitively, I’d say 
          “anything which you can give someone concrete directions to”. 
          Concretely: 
          Location state is that UTF-8 mess which appears in your URL bar.
        </i>
      </Text>
      <Handle />
    </div>
  </Slide>
);
