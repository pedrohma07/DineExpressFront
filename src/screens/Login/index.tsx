import React, { useState } from 'react';
import { Alert, Button, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const image = require('../../../assets//background.png');
const logo = require('../../../assets/logo.png');

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        Alert.alert(
            'Login button pressed',
         )
    };

    const handleSignUp = () => {
        // Handle sign up logic here
        Alert.alert(
            'Sign Up button pressed',
         )
    }

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        Alert.alert(
            'Forgot Password button pressed',
         )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.form}>
                    <Image source={logo} style={styles.logo}></Image>
                    <Text style={styles.label} aria-label="Label for Username" nativeID='labelEmail'>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="email@mail.com"
                        aria-label="input" aria-labelledby="labelEmail"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.label} aria-label="Label for Password" nativeID='labelPassword'>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="************"
                        value={password}
                        aria-label="input" aria-labelledby="labelPassword"
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                   <Pressable 
                        style={({ pressed }) => [
                            styles.button,
                            {
                                backgroundColor: pressed ? '#954152' : '#EA5455',
                            },
                        ]}
                        onPress={handleLogin}
                    >
                        <Text style={{color: "#FFFFFF", textAlign: "center", fontWeight: 'bold'}}>LOGIN</Text>
                    </Pressable>
                    <View style={{width: "80%"}}>
                        <View style={styles.horizontalContainer}>
                            <Text style={{  }}>
                                Don't have an account?
                            </Text>
                            <Pressable onPress={handleSignUp}>
                                <Text style={styles.linkText}> Sign Up</Text>
                            </Pressable>
                        </View>
                        <Text style={styles.linkText} onPress={handleForgotPassword}>
                            Forgot Password?
                        </Text>
                    </View>
                </View>
                
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#E2E1E5',
        borderWidth: 1,
        marginBottom: 16,
        width: "80%",
        paddingLeft: 8,
        borderRadius: 5,

    },
    label:{
        fontSize: 14,
        color: "#777676",
        marginBottom: 8,
        width: "80%",
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    button: {
        backgroundColor: "#EA5455",
        color: "#FFFFFF",
        padding: 9,
        width: "80%",
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 16,
    },
    logo: {
        objectFit: 'contain',
        width: "80%",
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16, 
        marginTop: 16
    },
    linkText: {
        color: "#849DF5",
        textDecorationLine: 'underline',
    } 
});

export default LoginScreen;