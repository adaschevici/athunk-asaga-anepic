import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

import defaultProps from '../../templates/spec-code-slide-template';

const images = {
  wrong: require('../../../assets/wrong.jpg'),
};

preloader(images);

/* eslint-disable */

export default (
  <CodeSlide
    {...defaultProps}
    code={require("raw-loader!../../../assets/code/bad_async_action")}
    ranges={[
      { loc: [0, 270], title: "We can make a request over HTTP using axios" },
      { loc: [9, 10], title: "But we can't return a promise as an action" },
      { loc: [10, 11], image: images.wrong },
    ]}
  />
);
