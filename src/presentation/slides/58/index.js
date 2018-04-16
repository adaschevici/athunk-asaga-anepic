import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  homer: require('../../../assets/all-good.jpg'),
};

preloader(images);

/* eslint-disable */

export default (
 <CodeSlide
    transition={["zoom", "slide"]}
    lang="js"
    bgColor="#002833"
    codeStyle={{
      fontSize: "40px",
    }}
    code={require("raw-loader!../../../assets/code/redux_observable_realistic")}
    ranges={[
      { loc: [0, 270], title: "A more realistic example, side effect and epic" },
      { loc: [3, 4], note: "you pass in an array of actions" },
      { loc: [4, 5], note: "create an observable ajax request" },
      { loc: [5, 8], note: "once the observable is fulfilled we dispatch an action with the payload" },
      { loc: [8, 9], note: "if an abort action is detected we should stop our current action" },
      { loc: [9, 10], note: "whenever we begin the fetch action we dispatch a fetch pending action" },
    ]}
  />
);
