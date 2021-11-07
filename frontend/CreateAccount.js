import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import StyledButton from './components/StyledButton/StyledButton';
import styles from './styles';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./assets/images/dog.jpg')} style={styles.background} /> */}
      <View style={styles.titles}>
        <Text style={styles.header}>Create an account</Text>
      </View>
      <View style={styles.actions}>
        <StyledButton
          content="Create account"
          textColor="black"
          backgroundColor="yellow"
          type="primary"
          onPress={() => {
            console.warn("Sign up button was pressed")
          }}
        />
        <StyledButton
          content="Or sign in with an existing one"
          textColor="black"
          backgroundColor="transparent"
          type="noBorder"
          onPress={() => {
            console.warn("Sign in button was pressed")
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}