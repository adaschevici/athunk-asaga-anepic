import React from 'react';
import { Slide, Image, Heading, Appear, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  dizzy: require('../../../assets/dizzy-emoji.jpeg'),
};

preloader(images);

const notes = `// The thunk itself (dispatch => axios.get…) has not yet been called.
  // When it reaches the middleware, redux-thunk will intercept & invoke it,
  // passing in the store's dispatch.`

/* eslint-disable */

export default (
 <CodeSlide
    transition={["zoom", "slide"]}
    lang="js"
    bgColor="#002833"
    code={require("raw-loader!../../../assets/code/sagas_basic")}
    ranges={[
      { loc: [0, 270], title: "But with sagas it looks much prettier" },
      { loc: [3, 6], note: "we have a bunch of actions" },
      { loc: [10, 13], note: "we try to get data from the API" },
      { loc: [13, 16], note: "if we fail on anything along the way lets catch" },
      { loc: [18, 22], note: "we create a watcher saga to intercept the dispatched actions and trigger a workerSaga" },
    ]}
  />
);
