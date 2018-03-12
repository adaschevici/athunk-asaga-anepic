import React from 'react';
import { Slide, Image, Heading, Appear, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  niceone: require('../../../assets/nice-one-min.jpeg'),
};

preloader(images);

const notes = `// The thunk itself (dispatch => axios.get…) has not yet been called.
  // When it reaches the middleware, redux-thunk will intercept & invoke it,
  // passing in the store's dispatch.`

/* eslint-disable */

export default (
 <CodeSlide
    transition={[]}
    lang="js"
    bgColor="#002833"
    code={require("raw-loader!../../../assets/code/thunk_middleware")}
    ranges={[
      { loc: [0, 270], title: "An even better way to do thunks" },
      { loc: [5, 12], title: "thunk function to do async requests and wait for them" },
      { loc: [14, 15], title: "dispatch the thunked login, which dispatches the login" },
      { loc: [15, 16], image: images.niceone },
    ]}
  />
);
