import React from 'react';
import { View, StyleSheet } from 'react-native';
import OnboardingComponent from './UserAndPublisher';

const PublisherComponent = () => {
  return (
    <View style={styles.container}>
      <OnboardingComponent />
    </View>
  );
};

export default PublisherComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the entire screen
    backgroundColor: '#000', // Matches the background color of the onboarding component
  },
});
