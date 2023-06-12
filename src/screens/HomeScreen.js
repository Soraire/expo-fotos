import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Take Photo"
        onPress={() => navigation.navigate('Photo')}
      />
    </View>
  );
};

export default HomeScreen;
