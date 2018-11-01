import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View, TextInput, ImageBackground, ScrollView} from 'react-native';
import { Icon, Header, Left } from 'native-base';
import backgroundImage from "../assets/background.jpg";

class FeedScreen extends Component {
    static navigationOptions = {
        header:null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-plane" style={{ fontSize:24, color: tintColor}}/>
          )
    }; 
    state ={
      text:""
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
      <ScrollView>
          <Text>Share a Place with us!</Text>
          <View style={styles.placeholder}>
            <Text>Image Preview!</Text>
          </View>
          <Button title="Pick Image" />
          <View style={styles.placeholder}>
            <Text>Map</Text>
          </View>
          <Button title="Locate Me" />
          <TextInput placeholder="Place Name" />
          <Button title="Share the Place!" />
          <Button style={{paddingTop:100}} title="Go to Home Screen" onPress={() => this.props.navigation.navigate('Home')}/>
      </ScrollView>
      </ImageBackground>
    );
  }
}



export default FeedScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#d3d3d3',
    width:'80%',
    height: 150

  },
  backgroundImage: {
    width: "100%",
    flex: 1
 },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
