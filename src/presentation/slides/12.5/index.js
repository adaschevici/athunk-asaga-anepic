import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import defaultProps from '../../templates/spec-code-slide-template';

/* eslint-disable */
export default (
  <CodeSlide
    {...defaultProps}
    code={require("raw-loader!../../../assets/code/middleware")}
    ranges={[
      { loc: [0, 270], title: "A boring logger but proves the point" },
      { loc: [0, 1], title: "Let's start, you want to inject the getState" },
      { loc: [1, 2], note: "And you want to return a callable so you can chain follow-up middlewares" },
      { loc: [4, 7], note: "Get prev state, action and next state" },
      { loc: [9, 12], note: "Then log them with some fun colors" },
      { loc: [12, 13], note: "Then return the nextState" },
    ]}
  />
);
