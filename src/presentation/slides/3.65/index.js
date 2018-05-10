import React from 'react';
import { Slide, Text } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <div className={style.item}>
        External State
        <Text className={style.subtext}>
          <i>state is mapped via redux state </i>
          <i>you can communicate to any component in your app via the redux store </i>
          <i>and </i><code className={style.highlighted}>connect</code>
        </Text>
      </div>
      <Handle />
    </div>
  </Slide>
);
