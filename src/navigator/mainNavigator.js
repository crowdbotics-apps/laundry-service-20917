import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList119312Navigator from '../features/NotificationList119312/navigator';
import Settings119311Navigator from '../features/Settings119311/navigator';
import Settings119303Navigator from '../features/Settings119303/navigator';
import UserProfile119301Navigator from '../features/UserProfile119301/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList119312: { screen: NotificationList119312Navigator },
Settings119311: { screen: Settings119311Navigator },
Settings119303: { screen: Settings119303Navigator },
UserProfile119301: { screen: UserProfile119301Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
