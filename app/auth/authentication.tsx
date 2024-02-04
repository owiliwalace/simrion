import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView, 
  Platform,
  Image, 
} from 'react-native';
import { Video } from 'expo-av'
import { Link, Stack } from 'expo-router';

const Login = () => {
  const [signIn, setSignIn]= useState(true);
 
  return (
    <>
  <Stack.Screen
        options={{
          title: 'Authentication',
          headerShadowVisible:false ,
          headerBackButtonMenuEnabled:true
                  }} />
    <SafeAreaView style={[styles.SafeAreaview,styles.WhiteBackground]} >
        <View style={styles.Container}>

                    <View style={[styles.HeroVideoContainer,styles.WhiteBackground, styles.centerAlign]}>
                      <Video style={styles.HeroVideo}
                        source={require('../../assets/images/signup.mp4')}
                        shouldPlay
                        useNativeControls={false}
//resizeMode='contain'
                        isLooping
                      />
                    </View>
                    <View style={[styles.InputContainer]}>
                      <Image style={styles.centerAlign}
                       source={require('../../assets/images/panther.jpg')}
                      />
                          <View style={[styles.loginOptions,styles.centerAlign]}>
                                <TouchableOpacity 
                                onPress={()=>(console.log("login"),setSignIn(true))}
                                style={[styles.LoginButton,
                                styles.centerAlign]}>
                                <Text>Sign IN</Text>
                                </TouchableOpacity> 
                                
                                  <TouchableOpacity
                                  onPress={()=>setSignIn(false)} 
                                  style={[styles.RegisterButton,
                                  styles.centerAlign]}>
                                  <Text>Register</Text>
                                  </TouchableOpacity> 
                          </View>
 <View style={[styles.section]}>

{ signIn ? <View style={[styles.centerAlign,styles.input,styles.WhiteBackground]}>
<TextInput style={[styles.input]}
placeholder='Login email'
/>
<TextInput style={[styles.input]}
placeholder='Login password'
/>
</View>
:
<View style={[styles.centerAlign,styles.WhiteBackground,styles.input]}>
<TextInput style={[styles.input]}

placeholder='Full name'
/>
<TextInput style={[styles.input]}
placeholder='email'
autoCorrect={false}
keyboardType='email-address'
autoCapitalize='none'
/>
<TextInput style={[styles.input]}
placeholder='phone number'
autoCorrect={false}
keyboardType='phone-pad'

/>
<TextInput style={[styles.input]}
placeholder='password'/>
</View>
}
        </View>

        <View>
      <TouchableOpacity
                                  onPress={()=>setSignIn(false)} 
                                  style={[styles.submitBtn,styles.centerAlign]}>
          <Text>SUMBIT</Text>
        </TouchableOpacity>
        </View>
      <View>
      <TouchableOpacity
                                  onPress={()=>setSignIn(false)} 
                                  style={[styles.ChromeButton,styles.centerAlign]}>
          <Text>Google</Text>
        </TouchableOpacity>
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
WhiteBackground:  {backgroundColor:"white",
},
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
input:{
    width:"80%",
    borderRadius:10,
    padding:2,height:"100%",
    alignSelf:"center"
},
loginOptions:{
  flexDirection:'row',
},
LoginButton:{
  width:'150%',
  height:50,
  backgroundColor:'gray',
  borderTopLeftRadius:25,
  borderBottomLeftRadius:25,
  borderEndColor:"black",
  borderEndWidth:1,
},
submitBtn:{
  width:'30%',
  height:50,
  backgroundColor:'white',
  borderRadius:35,
},

RegisterButton:{
  width:'150%',
  height:50,
  backgroundColor:'white',
  borderTopRightRadius:25,
  borderBottomRightRadius:25,
  borderStartColor:"black",

},
ChromeButton:{
  width:'30%',
  height:50,
  backgroundColor:'white',
  borderRadius:35,
  //borderBottomRightRadius:25,
  //borderStartColor:"black",

},
section:{
  height:200,
  backgroundColor:"green",
  width:"70%",
  alignItems:"center",
  alignSelf:"center",
  paddingTop:20
}
}
)
;
