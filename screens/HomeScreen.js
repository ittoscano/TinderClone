import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl`}>HomeScreen</Text>
      <Button title='Chat' onPress={() => navigation.navigate('Chat')}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({})