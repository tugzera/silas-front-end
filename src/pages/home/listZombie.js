import React from 'react';
import {Button, Icon, List, ListItem} from '@ui-kitten/components';

// import { Container } from './styles';

const listZombie = ({data, navigation, onSelected}) => {
  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={`${item.name}`}
        description={`${item.description}`}
        accessory={renderItemAccessory}
        onPress={() => onSelected(item)}
      />
    );
  };
  const renderItemAccessory = style => <Button style={style}>FOLLOW</Button>;

  return <List data={data} renderItem={renderItem} />;
};

export default listZombie;
