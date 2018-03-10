import React from 'react';
import { Appear, Slide, Image, Heading, List, ListItem, Fit, Text } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";
import Handle from '../../utils/handle';

const images = {
  onFire: require('../../../assets/thisisfine.jpg'),
};

const titleStyle = {
  fontSize: "356px",
};

const barSize = {
  width: '100%',
};

export default (
  <Slide
    transition={[]}
  >
    <Appear>
      <Image
        src={images.onFire.replace('/', '')}
        margin="0px auto 40px"
      />
    </Appear>
    <Heading size={3}>we need more state management</Heading>
    <Handle />
  </Slide>
);
