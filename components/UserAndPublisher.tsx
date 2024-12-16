import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const slides = [
  {
    title: 'LET THE MUSIC',
    description: "Get your song on Gaana, Jiosaavn, Wynk, Hungama, Spotify and every major platform.",
    image: require('../assests/logo/firstnamo.png'), // Replace with the correct image path
  },
  {
    title: "EARN MONEY",
    description: "Instagram, Snapchat, TikTok, Moj, Facebook and all new age apps.",
    image: require('../assests/logo/secondnamo.png'), // Replace with the correct image path
  },
  {
    title: "FANS AND FAME",
    description: "We deliver your song to Airtel, Vodafone, Idea, BSNL and JIO as callertunes.",
    image: require('../assests/logo/thirdnamo.png'), // Replace with the correct image path
  },
  {
    title: "OUR SERVICES",
    description: 'Music Distribution, Callertune Distribution, Youtube Monetisation, Youtube Promotion, Instagram Promotion, Facebook Promotion, Explore Now',
    image: require('../assests/logo/fourthnamo.png'), // Replace with the correct image path
  },
];

const OnboardingComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>Namo Music</Text>
        {currentSlide > 0 && (
          <TouchableOpacity onPress={handleBack}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Image Section */}
      <View style={styles.imageSection}>
        <View style={styles.backgroundShape} />
        <Image source={slides[currentSlide].image} style={styles.image} resizeMode="contain" />
      </View>

      {/* Dots Section */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlide === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{slides[currentSlide].title}</Text>
        <Text style={styles.description}>{slides[currentSlide].description}</Text>
      </View>

      {/* Bottom Section */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  back: {
    color: "#f00",
    fontSize: 16,
  },
  imageSection: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundShape: {
    position: "absolute",
    width: "150%",
    height: "50%",
    backgroundColor: "rgba(182, 45, 37, 1)",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    top: 100,
    zIndex: 0,
    transform: [{ scaleY: 0.6 }], // This reduces the height visually from the middle
  },
  
  image: {
    width: "100%",
    height: 250,
    zIndex: 1,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#888",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 16,
  },
  nextButton: {
    backgroundColor: "#f00",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});