import React from 'react';
import {Text,View, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Alert, FlatList} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { AuthSession } from 'expo';
export default class WriteScreen extends React.Component{
constructor(){
    super();
    this.state={
        title:"",
        author:"",
        story:"",
    }

}
submitStory=()=>{
    db.collection("stories").add({
        title:this.state.title,
        author:this.state.author,
        story:this.state.story,
    })
    this.setState({
        title:"",
        author:"",
        story:"",
    })
    Alert.alert("Your Story Has Been Saved!!");
}
render(){return(
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" enable>
        <Header backgroundColor={"white"} centerComponent={{text:"Write Your Story", style:{color:"blue"}, fontSize:20}}/>
         <TextInput placeholder={"Title"} onChangeText={(text)=>{this.setState({title:text})}} value={this.state.title} style={{height:40,borderWidth:2, marginTop:40, padding:10,margin:10}}>

         </TextInput>
         <TextInput placeholder={"Author"} onChangeText={(text)=>{this.setState({author:text})}} value={this.state.author} style={{height:40,borderWidth:2,  padding:10,margin:10}}>

         </TextInput>
         <TextInput placeholder={"Story"} onChangeText={(text)=>{this.setState({story:text})}} value={this.state.story} style={{height:40,borderWidth:2,  padding:10,margin:10}} multiline={true}>

         </TextInput>
         <TouchableOpacity style={{backgroundColor:"red", justifyContent:'center', alignSelf:'center', width:80, height:40}} onPress={this.submitStory}>
             <Text>
                 SUBMIT
             </Text>
         </TouchableOpacity>
   
    </KeyboardAvoidingView>
)}

}