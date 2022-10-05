import { useMemo, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Platform, Dimensions } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { NavigationContainer, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeBaseProvider, Icon } from 'native-base'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

// import Load from './app/components/Load'
import { AuthContext } from "./app/Context"
import WelcomeScreen from './app/screens/Welcome'
import ViewImageScreen from './app/screens/ViewImage'

const Tabs = createBottomTabNavigator()

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState()

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'red',
    },
  };
  
  // DEBUG
  const {landscape} = useDeviceOrientation()
  function wow() {
    // console.log('ok then', StatusBar.currentHeight)
    // console.log('ok then', Dimensions.get('screen')) // does not respond to device rotations
    // console.log('ok then', landscape) // does not respond to device rotations
  }
  // console.log(useDimensions())

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false)
        setUserToken("asdf")
      },
      signUp: () => {
        setIsLoading(false)
        setUserToken("asdf")
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      }
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  // if (isLoading) {
  //   return <Load />
  // }

  return (
    <NativeBaseProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={DarkTheme}>
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                  return <FontAwesome name="home" size={24} color="gray" />
                } else if (route.name === 'Profile') {
                  return <FontAwesome name="user" size={24} color="gray" />
                }

                
                // let iconName
                // if (route.name === 'Home') {
                //   console.log('route', route.name)
                //   iconName = focused
                //     ? 'home'
                //     : 'home-user';
                // } else if (route.name === 'Profile') {
                //   <FontAwesome name="user" size={24} color="black" />
                //   iconName = focused ? 'user' : 'user-secret';
                // }
                // // You can return any component that you like here!
                // return <FontAwesome name={iconName} />
                // return <Icon as={FontAwesome} name={iconName} />
              },
              tabBarActiveTintColor: 'gray',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tabs.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }} />
            <Tabs.Screen name='Profile' component={ViewImageScreen} options={{ headerShown: false }} />
          </Tabs.Navigator>
          {/* <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={WelcomeScreen}
            options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="Profile"
              component={ViewImageScreen}
            />
          </Stack.Navigator> */}
        </NavigationContainer>
      </AuthContext.Provider>
    </NativeBaseProvider>
  )
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" translucent={false} />
      <Text numberOfLines={1} onPress={wow} style={{backgroundColor: landscape ? 'red' : 'blue'}}>Wowee</Text>
      <TouchableHighlight>
        <Image source={require('./app/assets/test.png')} style={{ width: 100, height: 100 }} />
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => console.log('image tapped')}>
        <Image source={{ 
          uri: 'https://picsum.photos/200/300',
          width: 200,
          height: 300
        }}/>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// SafeAreaView only works on iOS
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
