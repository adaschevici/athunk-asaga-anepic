import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  homer: require('../../../assets/all-good.jpg'),
};

preloader(images);

const notes = `Whats going to happen is that once the app dispatches one of load_daschboard actions
  the saga will intercept it and start watching for the user_fetch_success actions`;

/* eslint-disable */

export default (
 <CodeSlide
    transition={["zoom", "slide"]}
    lang="js"
    bgColor="#002833"
    codeStyle={{
      fontSize: "40px",
    }}
    code={require("raw-loader!../../../assets/code/saga_flights")}
    notes={notes}
    ranges={[
      { loc: [0, 270], title: "What should a saga look like?" },
      { loc: [0, 1], note: "you get a generator function" },
      { loc: [3, 4], note: "you get a user which you can use in your next sagas" },
      { loc: [5, 6], note: "you dispatch a success action" },
      { loc: [6, 8], note: "unless we fail to fetch the data" },
      { loc: [11, 12], note: "we have another saga that can consume FETCH_USER_SUCCESS" },
      { loc: [14, 15], note: "take the dispatch action for success" },
      { loc: [15, 16], note: "and pull the updated user data from the store" },
      { loc: [17, 20], note: "perform some API actions to fetch data (sequentially)" },
      { loc: [33, 36], note: "however we can do that non-sequentially too" },
      { loc: [37, 38], note: "then we dispatch the action for success" },
      { loc: [45, 48], note: "we need to mount the sagas in the watcher saga" },
      { loc: [50, 51], image: images.homer.replace("/", "") },
      { loc: [52, 57], note: "now in order to have the sagas communicate with the store we need to inject the saga middleware" },
    ]}
  />
);
