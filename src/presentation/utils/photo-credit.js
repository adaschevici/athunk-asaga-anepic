import React from 'react';
import { Text } from 'spectacle';

const handleClass = {
  position: 'absolute',
  top: '100%',
  left: '0%',
  color: '#0892D0',
};

export default (props) => (
  <Text style={handleClass}>{props.text}</Text>
);


