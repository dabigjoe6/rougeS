import React from 'react';
import {Container, SearchItem} from '../../components';
import {View} from 'react-native';
import {styles} from './styles';
import {secondaryColor} from '../../styles/colors';
import {Isao} from 'react-native-textinput-effects';

const Search = ({navigation}) => {
  return (
    <Container style={styles.container} back={() => navigation.goBack()}>
      <Isao
        label={'Search location'}
        activeColor={secondaryColor}
        borderHeight={2}
        inputPadding={16}
        labelHeight={24}
        passiveColor={'#dadada'}
        autoFocus
        style={styles.inputContainer}
      />
      <View style={styles.resultsWrapper}>
        <SearchItem />
        <SearchItem />
      </View>
    </Container>
  );
};

export default Search;
