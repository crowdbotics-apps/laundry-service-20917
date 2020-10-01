import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0119422Navigator from '../features/BlankScreen0119422/navigator';
import UserProfile119412Navigator from '../features/UserProfile119412/navigator';
import Tutorial119411Navigator from '../features/Tutorial119411/navigator';
import NotificationList119383Navigator from '../features/NotificationList119383/navigator';
import Settings119382Navigator from '../features/Settings119382/navigator';
import Settings119374Navigator from '../features/Settings119374/navigator';
import UserProfile119372Navigator from '../features/UserProfile119372/navigator';
import UserProfile119341Navigator from '../features/UserProfile119341/navigator';
import Tutorial119340Navigator from '../features/Tutorial119340/navigator';
import NotificationList119312Navigator from '../features/NotificationList119312/navigator';
import Settings119311Navigator from '../features/Settings119311/navigator';
import Settings119303Navigator from '../features/Settings119303/navigator';
import UserProfile119301Navigator from '../features/UserProfile119301/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0119422: { screen: BlankScreen0119422Navigator },
UserProfile119412: { screen: UserProfile119412Navigator },
Tutorial119411: { screen: Tutorial119411Navigator },
NotificationList119383: { screen: NotificationList119383Navigator },
Settings119382: { screen: Settings119382Navigator },
Settings119374: { screen: Settings119374Navigator },
UserProfile119372: { screen: UserProfile119372Navigator },
UserProfile119341: { screen: UserProfile119341Navigator },
Tutorial119340: { screen: Tutorial119340Navigator },
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
