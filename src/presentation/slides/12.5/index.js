import React from 'react';
import { Slide, Heading, Text, CodePane } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

/* eslint-disable */
export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.title}
      >
        Middlewares
      </Heading>
      <Heading
				size={4}
        className={style.subtitle}
      >
        <i>(continued)</i>
      </Heading>
      <CodePane
        lang="js"
        source={require("raw-loader!../../../assets/code/sum")}
      />
      <Handle />
    </div>
  </Slide>
);
