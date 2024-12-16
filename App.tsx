import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/types';
import PublisherComponent from './components/PublisherComponent';
import UserComponent from './components/UserComponent';
import AuthScreen from './auth/AuthPage';
import RegisterScreen from './auth/RegistrerScreen';
import SignInScreen from './auth/SignInScreen';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import {AuthProvider} from './authContext/AuthContext';
import UserHomeScreen from './pages/User/UserScreenPage';
import UserDetails from './pages/User/UserDetails';
import SongsScreen from './pages/common/user/UserSongsScreen';
import ArtistsScreen from './pages/common/user/ArtistScreen';
import DownloadsScreen from './pages/common/user/DownloadsScreen';
import { SettingsScreen } from './pages/User/UserSettings';
import ForgetPasswordScreen from './auth/ForgetPassword';
import VerifyOTPScreen from './auth/VerifyOTP';
import ResetPasswordScreen from './auth/ResetPassword';
import NewMusic from './pages/common/newmusic/NewMusic';

// Create Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: '#fff',
            headerTitleStyle: {color: '#fff'},
          }}
          initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PublisherScreen"
            component={PublisherComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserScreen"
            component={UserComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen name="auth" component={AuthScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen
            name="Userhome"
            component={UserHomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="UserDetails" component={UserDetails} />
          <Stack.Screen name="Songs" component={SongsScreen}  options={{headerShown: false}} />
          <Stack.Screen name="Artists" component={ArtistsScreen}  options={{headerShown: false}} />
          <Stack.Screen name="Downloads" component={DownloadsScreen}  options={{headerShown: false}} />
          <Stack.Screen name="UserSettings" component={SettingsScreen}  options={{headerShown: false}} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}  />
          <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen}  />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}  />
          <Stack.Screen name="NewMusic" component={NewMusic}  />




        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
