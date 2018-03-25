import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  homer: require('../../../assets/all-good.jpg'),
};

preloader(images);

const notes = `Observables are quite handy and very composable. You can consume action streams
  and send them to action streams, cancel streams, filter them and so on`;

/* eslint-disable */

export default (
 <CodeSlide
    transition={["zoom", "slide"]}
    lang="js"
    bgColor="#002833"
    code={require("raw-loader!../../../assets/code/redux_observable")}
    ranges={[
      { loc: [0, 270], title: "Observables are pretty neat" },
      { loc: [1, 2], note: "you can construct an observable almost out of anything" },
      { loc: [4, 5], note: "you can construct an observable from an array of actions" },
      { loc: [7, 11], note: "you can dispatch an action, each dispatch returns a subscription" },
      { loc: [12, 13], note: "and are able to cancel it later" },
      { loc: [14, 18], note: "unsubscribing is not the ideal way to cancel actions" },
      { loc: [17, 18], note: "RxJs gives you good ways to consume and filter through operators" },
      { loc: [50, 51], image: images.homer.replace("/", "") },
    ]}
  />
);
