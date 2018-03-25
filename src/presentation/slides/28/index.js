import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  dizzy: require('../../../assets/dizzy-emoji.jpeg'),
};

preloader(images);

/* eslint-disable */

export default (
 <CodeSlide
    transition={["zoom", "slide"]}
    lang="js"
    bgColor="#002833"
    code={require("raw-loader!../../../assets/code/thunks_before_sagas")}
    ranges={[
      { loc: [0, 270], title: "Like we said we can do everything with thunks" },
      { loc: [1, 4], note: "we have a bunch of actions" },
      { loc: [13, 14], note: "we first start the whole async flow" },
      { loc: [15, 16], note: "we fetch the data from the API after" },
      { loc: [16, 18], note: "if we succeed we dispatch a success action" },
      { loc: [18, 20], note: "if we fail we dispatch a failure action" },
      { loc: [22, 23], image: images.dizzy },
    ]}
  />
);
