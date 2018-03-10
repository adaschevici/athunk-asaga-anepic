import React from 'react';
import { Slide, Heading } from 'spectacle';

const titleStyle = {
  fontSize: "80px",
};

export default (
  <Slide transition={["zoom", "slide"]} transitionDuration={500} bgColor="primary" id="title">
    <Heading
      size={1}
      style={titleStyle}
    >
      A <i>thunk</i>, a <i>saga</i> and an <i>epic</i> walk into a bar...
    </Heading>
  </Slide>
);
