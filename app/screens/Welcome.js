import { StyleSheet, ImageBackground, View, Image, Text, Button, TouchableOpacity, Platform } from 'react-native'
import { Box, Spinner, HStack, Icon } from 'native-base'
import Load from '../components/Load'

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/test.png')}
    >
      <Box>hello</Box>
      {/* <Icon as={Ionicons} name="home" />
      <Icon
        as={Ionicons}
        name={Platform.OS ? 'ios-menu' : 'md-menu'}
        size="20"
        color="red"
      />
      <Icon as={FontAwesome} name="home" /> */}
      <Load />
      {/* <View style={styles.logoContainer}>
        <Image source={require('../assets/splash.png')} style={styles.logo} />
        <Text>
          Sell what you don't need
        </Text>
      </View> */}
      {/* <View style={styles.loginButton}>
        <TouchableOpacity
          style={{width: '100%', height: '100%'}}
          onPress={() => {console.log('click'); navigation.navigate('Profile', {name: 'Jane'})}}
        >
          <Text style={{textAlign: 'center', fontSize: 20}}>View Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerButton}>
        <Text>
          register button
        </Text>
      </View> */}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  }
})