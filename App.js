import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeObject, getObject } from './helper'

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }


  // useEffect(() => {

  //   const temp = getObject('Image');
  //   console.log(temp, "temp")

  // }, [])





  return (
    <View style={styles.container}>


      <TouchableOpacity style={styles.button}
        onPress={async () => {
          // storeObject('Image', 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540janakbastakoti%252Fpratice_app/Camera/3fc3d056-0c7c-4656-a8b1-de0a8d1bed25.jpg')

          // const temp = getObject('Image');
          // console.log(temp, "temp")
          getObject('Image').then(a => {
            console.log(a, 'a')
          })

        }}
      >
        <Text style={styles.text}>Flip Camera</Text>
      </TouchableOpacity>

      {/* <Camera style={styles.camera} type={type}
         ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} 
            onPress={async () => {
              storeObject('Image', 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540janakbastakoti%252Fpratice_app/Camera/3fc3d056-0c7c-4656-a8b1-de0a8d1bed25.jpg')
              // if (cameraRef) {
              //   let photo = await cameraRef.takePictureAsync();
              //   console.log(photo)
              //   // props.setImage(photo);
              //   // props.setModalVisible();
              // }
            }}
          >
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
      {/* <Image style={{height: 300, width: 300}}
      source={{uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540janakbastakoti%252Fpratice_app/Camera/3fc3d056-0c7c-4656-a8b1-de0a8d1bed25.jpg'}}

      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 100
  },
});
