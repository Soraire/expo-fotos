import React from 'react';
import { View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const PhotoScreen = () => {
  const takePhoto = async (camera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri); // You can use this URI to display the image or send it to the backend
      // Send the photo to the backend using axios or any other HTTP library
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <Button
        title="Take Photo"
        onPress={() => takePhoto()}
      />
    </View>
  );
};

export default PhotoScreen;
