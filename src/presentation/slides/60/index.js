import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

import defaultProps from '../../templates/spec-code-slide-template';

const images = {
  homer: require('../../../assets/all-good.jpg'),
};

preloader(images);

/* eslint-disable */

export default (
  <CodeSlide
    {...defaultProps}
    code={require("raw-loader!../../../assets/code/combined_epics")}
    ranges={[
      { loc: [0, 270], title: "A look at how to inject epics for use in redux" },
      { loc: [2, 6], note: "use combineEpics from redux-observable to combine them into a single middleware" },
      { loc: [22, 24], note: "we create the middleware based on the rootEpic and apply it to the store" },
      { loc: [28, 29], image: images.homer.replace("/", "") },
    ]}
  />
);
