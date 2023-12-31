import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {

  const { signInWithGoogle } = useAuth();
  return (
    <View>
      <Button title='login' onPress={signInWithGoogle}/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({})