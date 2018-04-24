import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

import defaultProps from '../../templates/spec-code-slide-template';

const images = {
  niceone: require('../../../assets/nice-one-min.jpeg'),
};

preloader(images);

/* eslint-disable */

export default (
 <CodeSlide
   {...defaultProps}
   code={require("raw-loader!../../../assets/code/thunk_middleware")}
   ranges={[
     { loc: [0, 270], title: "An even better way to do thunks" },
     { loc: [5, 12], title: "thunk function to do async requests and wait for them" },
     { loc: [14, 15], title: "dispatch the thunked login, which dispatches the login" },
     { loc: [15, 16], image: images.niceone },
   ]}
  />
);
