
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import FeedScreen from './screens/feedScreen';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
class App extends Component {
  render() {
    return (
      <AppDrawerNav style={{ backgroundColor: "red" }} />
    );
  }
}
const Drawer = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: "center", justifyContent: "center" }}>
      <Image source={require("./assets/world.jpg")} style={{ height: 120, width: 120, borderRadius: 60 }} />

    </View>
    <ScrollView>

      <DrawerItems {...props} />

    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNav = createDrawerNavigator({
  Home: HomeScreen,
  Travel: FeedScreen,
  Settings: SettingsScreen
}, {
    contentComponent: Drawer,

    //drawerWidth: width,
    contentOptions: {
      activeTintColor: 'blue',

    }
  }
)

class Feed extends Component {
  render() {
    return (
      <View >
        <Text >
          FEDEER
        </Text>


      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View >
        <Text >
          Settings
        </Text>
       </View>
    );
  }
}


export default createMaterialTopTabNavigator({

  Home: {
    screen: App,
    navigationOptions: {
      tabBarLabel: "home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  
   Feed: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarLabel: "Travel",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-plane" color={tintColor} size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: "settings",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
},
  {
    
    swipeEnabled: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',

      style: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: 'gray'
      }
      ,
      showIcon: true,
        
    }
  }
)















