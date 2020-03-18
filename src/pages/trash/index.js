import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';

// import { Container } from './styles';

const Trash = ({navigation}) => {
  const values = navigation.getParam('values');
  console.log(values);
  return (
    <View>
      <Text>Trash Works!</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go home!</Button>
    </View>
  );
};

Trash.navigationOptions = {
  title: 'Trash',
};

export default Trash;
