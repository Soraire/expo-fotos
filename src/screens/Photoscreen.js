import React, { useState, useEffect } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const PhotoScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied!');
      }
    })();
  }, []);

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', {
        uri: selectedImage,
        type: 'image/jpg', // adjust the type according to your image file format
        name: 'photo.jpg', // adjust the name as desired
      });

      const response = await axios.post('YOUR_BACKEND_URL', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ flex: 1 }} />}
      <Button title="Take Photo" onPress={takePhoto} />
      <Button title="Upload Image" onPress={uploadImage} disabled={!selectedImage} />
    </View>
  );
};

export default PhotoScreen;