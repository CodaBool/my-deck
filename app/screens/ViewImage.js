import { Image, View, StyleSheet, Text } from 'react-native'

import colors from '../config/colors'

export default function ViewImage({ navigation, route }) {
  if (!route.params || !navigation) {
    return <Text>alrighty</Text>
  }
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} onPress={() => navigation.navigate('Welcome', {name: 'Bob'})}></View>
      <View style={styles.deleteIcon}></View>
      <Text style={{fontSize: 30, color: 'white'}}> {route.params.name}'s Profile</Text>
      <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: '#000',
    flex: 1
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})