import React from 'react';
import { Text } from 'spectacle';

import styles from './style.scss';

export default (props) => (
  <Text className={styles.photoCredit}>{props.text}</Text>
);


