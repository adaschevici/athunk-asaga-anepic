import React from 'react';
import { Slide, Heading, Text, Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const images = {
  picklerick: require('../../../assets/pickle-rick.png'),
};

preloader(images);

const notes = `you can read more about micros and sagas at this link`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
    notes={notes}
  >
    <div>
      <Heading
        className={style.saga}
      >
        Sagas
      </Heading>
      <Heading
				size={4}
        className={style.subtitle}
      >
        <i>(continued)</i>
      </Heading>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Image
          src={images.picklerick.replace("/", "")}
          className={style.picklerick}
        />
        <div>
          <Text className={style.urlSize}>
            https://youtu.be/xDuwrtwYHu8
          </Text>
          <Text className={style.urlSize}>
            Catie McCaffrey
          </Text>
        </div>
      </div>
      <Handle />
    </div>
  </Slide>
);
