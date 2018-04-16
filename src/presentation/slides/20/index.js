import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  wrong: require('../../../assets/wrong.jpg'),
};

preloader(images);

/* eslint-disable */

export default (
 <CodeSlide
    transition={["slide", "spin"]}
    lang="js"
    bgColor="#002833"
    codeStyle={{
      fontSize: "40px",
    }}
    code={require("raw-loader!../../../assets/code/bad_async_action")}
    ranges={[
      { loc: [0, 270], title: "We can make a request over HTTP using axios" },
      { loc: [9, 10], title: "But we can't return a promise as an action" },
      { loc: [10, 11], image: images.wrong },
    ]}
  />
);
