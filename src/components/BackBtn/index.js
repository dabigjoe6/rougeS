import React from 'react';
import {Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {secondaryColor} from '../../styles/colors';

const BackBtn = ({...props}) => {
  return (
    <Pressable {...props}>
      <Icon name="arrow-back" type="material" color={secondaryColor} />
    </Pressable>
  );
};

export default BackBtn;
