import React from 'react';
import { Slide, Text, Appear } from 'spectacle';

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `You can manage your state through
  the way the state for your components is stored.`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Appear>
        <div className={style.item}>
          External State
          <Appear>
            <Text className={style.subtext}>
              <i>state is mapped via redux state </i>
              <i>you can communicate to any component in your app via the redux store </i>
              <i>and </i><code className={style.highlighted}>connect</code>
            </Text>
          </Appear>
        </div>
      </Appear>
      <Handle />
    </div>
  </Slide>
);
