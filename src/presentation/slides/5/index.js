import React from 'react';
import { Slide, Heading, Text } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    id="data-semantic"
  >
    <div>
      <Heading
        className={style.title}
      >
        DATA
      </Heading>
      <Text className={style.subcontent}>
        <i>
          Data state covers information which your 
          application temporarily stores about the big wide world. 
          That is, it covers your business data.
        </i>
      </Text>
      <Handle />
    </div>
  </Slide>
);
