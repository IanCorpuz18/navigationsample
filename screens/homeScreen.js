
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, ImageBackground, Image } from 'react-native';
import  { Header, Left, Right, Icon } from 'native-base';
import DefaultInput from "../assets/components/UI/DefaultInput/DefaultInput"
import HeadingText from "../assets/components/UI/HeadingText/HeadingText"
import MainText from "../assets/components/UI/MainText/MainText";
import ButtonWithBackground from "../assets/components/UI/ButtonWithBackground/ButtonWithBckground";
import backgroundImage from "../assets/background.jpg";
import SettingsScreen from './settingsScreen';
import text from "../assets/text.png"


class HomeScreen extends Component {
  static navigationOptions= {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize:24, color: tintColor}}/>
    )
  }

  loginHandler = () => {
      LoginScreen ();
  }
  
  render() {
    return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <Header>
    <Left style={{marginLeft:"-40%"}}>
              <Icon name='menu' style={{paddingRight:50}}
                onPress={() => this.props.navigation.openDrawer() }/>
          </Left>
    </Header>
    <View style={styles.container}>
    <Image source={text} />
        <ButtonWithBackground color="#808080" onPress={() => alert("Hello")}>Switch to Login</ButtonWithBackground>
        <View style={styles.inputContainer} >
          <DefaultInput placeholder="Your Email Address" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input}  />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <ButtonWithBackground color="#808080" onPress={() => this.props.navigation.navigate('Settings')}>Submit</ButtonWithBackground>
    </View>
    </ImageBackground>      
    );
  }
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
      flex: 1,
       justifyContent: "center",
       alignItems:"center"
    },
    backgroundImage: {
       width: "100%",
       flex: 1
    },

    inputContainer: {
        width: "80%"
    },

  input: {
    color: "black",
    fontFamily: 'Baskerville-BoldItalic'


  }

});
