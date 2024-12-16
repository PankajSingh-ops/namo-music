import { StyleSheet, View } from 'react-native'
import React from 'react'
import OnboardingComponent from './UserAndPublisher'

const UserComponent = () => {
  return (
    <View style={styles.container}>
        <OnboardingComponent/>
    </View>
  )
}

export default UserComponent
const styles = StyleSheet.create({
    container: {
      flex: 1, // Ensures the container fills the entire screen
      backgroundColor: '#000', // Matches the background color of the onboarding component
    },
  });

