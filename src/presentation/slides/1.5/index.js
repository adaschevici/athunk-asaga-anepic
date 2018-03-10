import React from 'react';
import { Appear, Slide, Image, Heading, List, ListItem, Fit, Text } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";
import Handle from '../../utils/handle';
import styles from './style.scss';

const images = {
  bar: require('../../../assets/bar-pic.jpg'),
};

const titleStyle = {
  fontSize: "356px",
};

const barSize = {
  width: '100%',
};

const firstBubble = {
  position: 'absolute',
  top: '20%',
  left: '30%',
  color: '#F88379',
};

const secondBubble = {
  position: 'absolute',
  top: '20%',
  left: '60%',
  color: '#F88379',
};

export default (
  <Slide
    transition={[]}
    className={styles.slideSize}
  >
    <Image
      src={images.bar.replace('/', '')}
      margin="0px auto 40px"
      barSize={barSize}
    />
    <Appear>
      <div>
        <Text style={firstBubble}>State state</Text>
        <Text style={secondBubble}>State state</Text>
      </div>
    </Appear>
    <Appear fid="2">
      <Heading size={3}>...the bartender asks, what is the state of affairs?</Heading>
    </Appear>
    <Handle />
  </Slide>
);
