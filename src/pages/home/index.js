import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon, List, ListItem} from '@ui-kitten/components';
import ListZombie from '../home/listZombie';

// import { Container } from './styles';
const data = [
  {id: 1, name: 'José', description: 'Eat brains'},
  {id: 2, name: 'Cristian', description: 'Summon other undeads'},
  {id: 3, name: 'Bruno', description: 'Toxic breathe'},
];

const Home = ({navigation}) => {
  const onSelected = item => {
    navigation.navigate('Trash', {values: item, id: item.id});
  };

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={`${item.name}`}
        description={`${item.description}`}
        accessory={style => renderItemAccessory(style, index, item)}
        onPress={() => onSelected(item)}
      />
    );
  };
  const renderItemAccessory = (style, index, item) => (
    <Button style={style} onPress={() => onSelected(item)}>
      FOLLOW
    </Button>
  );

  return (
    <View>
      <Text>Home Works!</Text>
      <Button onPress={() => navigation.navigate('Trash')}>Go trash!</Button>
      <List data={data} renderItem={renderItem} />
    </View>
  );
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
