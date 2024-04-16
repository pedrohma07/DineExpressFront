import React, { useState } from 'react';
import { View, TextInput, Button, ImageBackground, Pressable, Text, Image } from 'react-native';
import { styles } from './styles.js';

const SignUp = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ssn, setSsn] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const bgImage = require('../../../assets/bgSignUp.png');
    const logo = require('../../../assets/logo.png');

    const register = () => {
        // Add your registration logic here
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={{width: '100%', height: '100%'}} >
                <View style={styles.form}>
                    <Image source={logo} style={styles.logo}></Image>
                    <Text style={styles.label} aria-label="Label for name" nativeID='labelName'>Name</Text>
                    <TextInput placeholder="Jeredy da Silva dos Santos" aria-label="input" aria-labelledby="labelName" value={name} style={styles.input} onChangeText={setName} />
                    <Text style={styles.label} aria-label="Label for phone number" nativeID='labelPhoneNumber'>Phone Number</Text>
                    <TextInput placeholder="+55 (82) 99999-9999" value={phoneNumber} aria-label="input" aria-labelledby="labelPhoneNumber" style={styles.input} onChangeText={setPhoneNumber} />
                    <Text style={styles.label} aria-label="Label for SSN" nativeID='labelSSN'>SSN</Text>
                    <TextInput placeholder="000-00-0000" value={ssn} aria-label="input" aria-labelledby="labelSSN" style={styles.input} onChangeText={setSsn} />
                    <Text style={styles.label} aria-label="Label for Email" nativeID='labelEmail'>Email</Text>
                    <TextInput placeholder="Email" value={email} style={styles.input} aria-label="input" aria-labelledby="labelEmail" onChangeText={setEmail} />
                    <Text style={styles.label} aria-label="Label for Password" nativeID='labelPassword'>Password</Text>
                    <TextInput placeholder="Password" value={password} style={styles.input} aria-label="input" aria-labelledby="labelPassword" onChangeText={setPassword} secureTextEntry />
                    <Text style={styles.label} aria-label="Label for Confirm Password" nativeID='labelConfirmPassword'>Confirm Password</Text>
                    <TextInput placeholder="Confirm Password" value={confirmPassword} style={styles.input} aria-label="input" aria-labelledby="labelConfirmPassword" onChangeText={setConfirmPassword} secureTextEntry />
                    <Pressable 
                        style={({ pressed }) => [
                            styles.button,
                            {
                                backgroundColor: pressed ? '#954152' : '#EA5455',
                            },
                        ]}
                        onPress={register}
                        >
                        <Text style={{color: "#FFFFFF", textAlign: "center", fontWeight: 'bold'}}>REGISTER</Text>
                    </Pressable>
                    <View style={{width: "80%"}}>
                          <View style={styles.horizontalContainer}>
                            <Text style={{  }}>
                                Already have an account? 
                            </Text>
                            <Pressable>
                                <Text style={styles.linkText}> Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SignUp;