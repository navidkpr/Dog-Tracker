import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StyledButton from './../../../../components/StyledButton/StyledButton';
import styles from './styles';

export default function OnBoardingScreen() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../../../assets/images/dog.jpg')} style={styles.background} />
      <View style={styles.titles}>
        <Text style={styles.header}>Track your pet from anywhere!</Text>
      </View>
      <View style={styles.actions}>
        <StyledButton
          content="Create account"
          textColor="black"
          backgroundColor="yellow"
          type="primary"
          onPress={() => {
            navigation.navigate('Create Account')
          }}
        />
        <StyledButton
          content="Or sign in with an existing one."
          textColor="black"
          backgroundColor="transparent"
          type="noBorder"
          onPress={() => {
            navigation.navigate('Sign In')
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}