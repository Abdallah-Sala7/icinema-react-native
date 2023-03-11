import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {I18nManager, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from './src/app/reducers/loginSlice';
import {COLORS} from './src/constants';

import {LoginNavigation, MainLayout} from './src/Navigation';

import {BookScreen, MovieDetail} from './src/screens';

const App = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  const {isLogin} = useSelector(state => state.login);

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        dispatch(setLogin(true));
      }
    });
  }, [isLogin]);

  try {
    I18nManager.allowRTL(false);
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <StatusBar hidden />

      <NavigationContainer
        theme={{
          colors: {
            background: COLORS.dark,
          },
        }}>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {!isLogin ? (
              <Stack.Screen
                name="LoginNavigation"
                component={LoginNavigation}
              />
            ) : (
              <>
                <Stack.Screen name="main" component={MainLayout} />
                <Stack.Screen name="MovieDetails" component={MovieDetail} />
                <Stack.Screen name="BookScreen" component={BookScreen} />

              </>
            )}
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
