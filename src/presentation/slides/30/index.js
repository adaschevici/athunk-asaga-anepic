import React from 'react';
import CodeSlide from 'spectacle-code-slide';

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
