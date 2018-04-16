import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  dizzy: require('../../../assets/dizzy-emoji.jpeg'),
};

preloader(images);

const notes = `We can create a generator quite easily, we use the superstart syntax
  and then create an iterator to send actions to the generator`

/* eslint-disable */

export default (
 <CodeSlide
    transition={["zoom", "slide"]}
    lang="js"
    codeStyle={{
      fontSize: "40px",
    }}
    bgColor="#002833"
    notes={notes}
    code={require("raw-loader!../../../assets/code/generator")}
    ranges={[
      { loc: [0, 270], title: "A javascript genny" },
      { loc: [0, 1], note: "we have a superstar notation function" },
      { loc: [1, 5], note: "there is a try section which we map to the next() call" },
      { loc: [5, 8], note: "and a catch section where we have mapped the throw() call" },
      { loc: [10, 11], note: "we instantiate the generator and bind it to the iterator" },
      { loc: [10, 11], note: "we instantiate the generator and bind it to the iterator" },
      { loc: [12, 13], note: "and we call next to execute the try block" },
      { loc: [16, 17], note: "or throw something to execute the catch block" },
    ]}
  />
);
