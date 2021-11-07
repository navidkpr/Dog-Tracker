import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup'

import StyledButton from './../../../../components/StyledButton/StyledButton';
import styles from './styles';
import { register } from './../../../store/actions/auth'

const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

export default function CreateAccountScreen() {
  const { message, message_type } = useSelector(state => state.message);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Create an account</Text>
      </View>
      <View style={styles.form}>
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            dispatch(register(values.email, values.password))
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
          {/* <View style={styles.inputGroup}>
            <TextInput
              name="username"
              placeholder="Username"
              style={styles.textInput}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              placeholderTextColor='gray'
              value={values.username}
            />
            {errors.username &&
            <Text style={ styles.error }>{errors.username}</Text>
            }
          </View> */}
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
          {message && message_type == 'error' && 
              <Text style={ styles.error }>{message}</Text>
          }
          <View style={styles.actions}>
            <StyledButton
              content="Create account"
              textColor="white"
              backgroundColor="black"
              type="primary"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </View>
          {message && message_type == 'success' &&
              <Text style={ [styles.error, {color: 'green'}] }>{message}</Text>
          }
          </>
        )}
        </Formik>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}