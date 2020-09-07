import React from 'react';
import {Text,View, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Alert} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Permissions from 'expo-permissions';
import firebase from 'firebase';
import db from '../config';
export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:"",
            password:"",
        }
    }
    login=async(email,password)=>{
        if(email && password){
            try{
                const response=await firebase.auth().signInWithEmailAndPassword(email,password);
                if (response){
                    this.props.navigation.navigate('Write');
                }

            }
           catch(error){
               switch(error.code){
                   case "auth/user-not-found":Alert.alert("User Not Found");
                   break;
                   case "auth/invalid-email":Alert.alert("Invalid EmailID");
                   break;

               }
           } 
        }
        else{
            Alert.alert("Enter EmailID and Password")
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
            <View>
            <Image source={require("../assets/booklogo.jpg")} style={{width:200,height:200}}/>
                    <Text style={{textAlign:'center',fontSize:30}}>
                         WILY
                    </Text>    
            </View>
            <View>
                <TextInput style={styles.loginBox} placeholder="abc@example.com" keyboardType="email-address" onChangeText={(text)=>{this.setState({emailId:text})}}>
               
                </TextInput>
                <TextInput style={styles.loginBox} placeholder=" Enter Password" secureTextEntry={true} onChangeText={(text)=>{this.setState({password:text})}} >

                </TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{this.login(this.state.emailId,this.state.password)}}>
                  <Text style={{textAlign:'center'}}>
                   LOGIN
                  </Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles= StyleSheet.create({
    loginBox:{
     width:300,
     height:40,
     borderWidth:1.5,
     fontSize:20,
     margin:10,
     paddingLeft:10,
    },
    button:{
        height:30,
        width:90,
        borderwidth:1,
        marginTop:20,
        paddingTop:5,
        borderRadius:'center',
        
    }
})