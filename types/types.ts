import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  PublisherScreen: undefined;
  UserScreen: undefined;
  auth: { role: 'publisher' | 'user' | 'admin' };
  Register: { email?: string };
  SignIn: { email?: string } | undefined;
  Userhome:undefined;
  UserDetails:undefined;
  Songs:undefined;
  Artists:undefined;
  Downloads:undefined;
  UserSettings:undefined;
  ForgetPassword:undefined;
  VerifyOTP:{ email?: string };
  ResetPassword:{ email?: string };
  NewMusic:undefined;
};

// Define navigation prop types for each screen
export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type PublisherScreenProps = NativeStackScreenProps<RootStackParamList, 'PublisherScreen'>;
export type UserScreenProps = NativeStackScreenProps<RootStackParamList, 'UserScreen'>;
export type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'auth'>;
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
export type UserHomeProps = NativeStackScreenProps<RootStackParamList, 'Userhome'>;
export type UserDetailsProps = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;
export type SongsDetailsProps = NativeStackScreenProps<RootStackParamList, 'Songs'>;
export type ArtistDetailsProps = NativeStackScreenProps<RootStackParamList, 'Artists'>;
export type DownloadDetailsProps = NativeStackScreenProps<RootStackParamList, 'Downloads'>;
export type UserSettingsProps = NativeStackScreenProps<RootStackParamList, 'UserSettings'>;
export type ForgetPasswordProps = NativeStackScreenProps<RootStackParamList, 'ForgetPassword'>;
export type VerifyOTPProps = NativeStackScreenProps<RootStackParamList, 'VerifyOTP'>;
export type ResetPasswordProps = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;
export type NewMusicProps = NativeStackScreenProps<RootStackParamList, 'NewMusic'>;