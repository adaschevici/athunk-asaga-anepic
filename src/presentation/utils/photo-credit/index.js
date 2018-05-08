import React from 'react';
import { Text } from 'spectacle';

import styles from './style.scss';

const handleClass = {
  position: 'absolute',
  top: '100%',
  left: '0%',
};

export default (props) => (
  <Text className={styles.photoCredit}>{props.text}</Text>
);


