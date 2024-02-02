import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView, // Import KeyboardAvoidingView
  Platform, // Import Platform
} from 'react-native';
import { Video } from 'expo-av'
import { Link, Stack } from 'expo-router';

const Login = () => {
 
  return (
    <>
  <Stack.Screen
        options={{
          title: 'Login',
          headerBackButtonMenuEnabled:true
                  }} />
    <SafeAreaView style={[styles.SafeAreaview,styles.WhiteBackground]} >
        <View style={styles.Container}>

                    <View style={[styles.HeroVideoContainer,styles.WhiteBackground, styles.centerAlign]}>
                      <Video style={styles.HeroVideo}
                        source={require('../../assets/images/signup.mp4')}
                        shouldPlay
                        useNativeControls={false}
                        resizeMode='contain'
                        isLooping
                      />
                    </View>
                          <View style={styles.InputContainer}>
<View style={[styles.Input, styles.WhiteBackground]}>

                          <View>
                            <TextInput style={styles.EmailInput}
                              placeholder="Email"
                              
                            />
                            <TextInput style={styles.passwordInput}
                              placeholder="Password"
                              
                              secureTextEntry={true}
                            />
                          </View>
                    <TouchableOpacity 
                    onPress={()=>{console.log("Tried Login")}}
                    style={styles.Login}>
                      <Text >LOGIN</Text>
                    </TouchableOpacity>
                    <View
                    style={styles.SignUp}>

            <Text >
               Don't Have an account? </Text>
                        <TouchableOpacity style={styles.SignIn} >

                            <Link href={'/provider/SignUp'}>
                            <Text  style={styles.SignUpText}>SignUp</Text>
                            </Link>
                            </TouchableOpacity>
                    
                    </View>
          </View>
                              </View>

                        </View>
    </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  SafeAreaview:{height:"100%" },
  centerAlign:{
alignItems:"center",
alignSelf:"center",
justifyContent:"center",
alignContent:"center"
},
WhiteBackground:{backgroundColor:"white",},
  HeroVideoContainer:{
width:"50%",
  },
  HeroVideo:{
   width:"100%",
    height:700,
marginLeft:"25%"
  },
  Container:{
    flexDirection:"row",
    height:'100%',
    width:'100%'
  },
  InputContainer:{
    width:"50%",
    display:"flex",
    flexDirection:"column",
    backgroundColor:"blue",
    height:"100%"
  },
  Input:{
    width:"80%",
    borderRadius:10,
    padding:2,
    alignSelf:"center"
  }
  ,
  Screen
}
)
;
