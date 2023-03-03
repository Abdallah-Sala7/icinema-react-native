import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {I18nManager, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from './src/constants';

import {
  Interests,
  MainLayout,
  NewUser,
  RegisterScreen,
  SplashScreen,
  Verification,
} from './src/screens';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const Stack = createNativeStackNavigator();

  try {
    I18nManager.allowRTL(false);
  } catch (e) {
    console.log(e);
  }

  useEffect(() => {
    AsyncStorage.getItem('token').then(val => setIsLogin(true));
  }, []);

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
            {!isLogin && (
              <>
                <Stack.Screen name="splash" component={SplashScreen} />

                <Stack.Screen name="register" component={RegisterScreen} />

                <Stack.Screen name="new user" component={NewUser} />

                <Stack.Screen name="verification" component={Verification} />

                <Stack.Screen name="interests" component={Interests} />
              </>
            )}
            <Stack.Screen name="main" component={MainLayout} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
