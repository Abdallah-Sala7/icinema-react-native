import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import assets from '../assets/assets';
import {CustomTabBarButton} from '../components';
import {COLORS} from '../constants';

import {HomeScreen, ShowingNow, TimeLine} from '../screens';

const MainLayout = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.gray,
        tabBarInactiveTintColor: COLORS.white,
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = assets.homeDark;
          } else if (route.name === 'timeline') {
            iconName = assets.movieDark;
          } else {
            iconName = assets.homeDark;
          }
          return (
            <Image
              style={{
                tintColor: color,
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
              source={iconName}
            />
          );
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          left: 5,
          right: 5,
          backgroundColor: COLORS.gray,
          borderTopColor: COLORS.gray,
          height: 85,
        },
      })}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="timeline"
        component={TimeLine}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="show now"
        component={ShowingNow}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainLayout;
