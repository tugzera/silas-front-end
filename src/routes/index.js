import Home from '../pages/home';
import Trash from '../pages/trash';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Trash: Trash,
  }),
);

export default Routes;
