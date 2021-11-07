import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { Text, View, ImageBackground, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';

import StyledButton from './../../../../components/StyledButton/StyledButton';
import styles from './styles';
import { login } from './../../../store/actions/auth'

const signinValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

export default function SignInScreen() {

  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Sign in</Text>
      </View>
      <View style={styles.form}>
        <Formik
          validationSchema={signinValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            dispatch(login(values.email, values.password))
          }}
        >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
        <>
          <View style={styles.inputGroup}>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholderTextColor='gray'
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email &&
            <Text style={ styles.error }>{errors.email}</Text>
            }
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              name="password"
              placeholder="password"
              style={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholderTextColor='gray'
              value = {values.password}
              secureTextEntry
            />
            {errors.password &&
              <Text style={ styles.error }>{errors.password}</Text>
            }
          </View>
          <View style={styles.inputGroup}>
          {message &&
            <Text style={ styles.error }>{message}</Text>
          }
          </View>
          <View style={styles.actions}>
            <StyledButton
              content="Sign in"
              textColor="white"
              backgroundColor="black"
              type="primary"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </View>
          </>
        )}
        </Formik>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}