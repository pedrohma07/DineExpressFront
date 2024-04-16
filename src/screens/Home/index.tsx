import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native';

type Props = {
  navigation: any
}

export default function HomeScreen({ navigation }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={{width: 200, height: 200, objectFit: "contain"}}></Image>
      <View style={{width: "80%"}}>
        <Pressable 
          style={({ pressed }) => [
              styles.button,
              {
                  backgroundColor: pressed ? '#954152' : '#EA5455',
              },
          ]}
          onPress={() => navigation.navigate('Login')}
        > 
          <Text style={{color: "#FFFFFF", textAlign: "center", fontWeight: 'bold'}}>LOGIN</Text>
        </Pressable>
        <Pressable 
          style={({ pressed }) => [
              styles.buttonSignUp,
              {
                  backgroundColor: pressed || isPressed ? '#EA5455' : '#f9f9f9',
                  borderWidth: 1,
                  borderColor: pressed || isPressed ? '#EA5455' : '#EA5455',
              },
          ]}
          onPress={() => navigation.navigate('SignUp')}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Text style={{color:  isPressed ? "#FFFFFF" : "#EA5455", textAlign: "center", fontWeight: 'bold',}}>SIGN UP</Text>
        </Pressable>
          
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonSignUp: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    color: "#EA5455", 
    textAlign: "center", 
    fontWeight: 'bold',
    borderColor: "#EA5455",
    backgroundColor: "#FFFFFF",
  },
})