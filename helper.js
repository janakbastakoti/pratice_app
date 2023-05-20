
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeObject = async (key,value) => {
    console.log(key, value, 'shsh');
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)

      console.log('save')
    } catch (e) {
      // saving error
    }
  }


  export const getObject = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
      } catch(e) {
        // error reading value
      }
  }