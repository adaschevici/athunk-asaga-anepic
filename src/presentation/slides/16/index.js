import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import defaultProps from '../../templates/spec-code-slide-template';
/* eslint-disable */

export default (
  <CodeSlide
    {...defaultProps}
    code={require("raw-loader!../../../assets/code/basic_thunks")}
    ranges={[
      { loc: [0, 270], title: "A simple thunk example" },
      { loc: [0, 7], title: "Normal functions are eager" },
      { loc: [7, 13], note: "Thunked versions are lazy" },
      { loc: [14, 15], note: "You create a thunked version of your function" },
      { loc: [18, 19], note: "When you want to evaluate it you can call the thunk" },
      { loc: [21, 22], note: "However when you use fat arrows the syntax is more elegant" },
    ]}
  />
);
