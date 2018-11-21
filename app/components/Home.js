import React, {Component} from 'react';
import { View, AsyncStorage} from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import HomeScreen from './main/HomeScreen';
import { Divider,Icon, Text, Button } from 'react-native-elements';
import Products from './main/Products';


const RootDrawer = createAppContainer(createDrawerNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: () => (<Icon name="home" />),
      }
    },
    'Products': {
      screen: Products,
      navigationOptions: {
        drawerIcon: () => (<Icon name='ios-information-circle'  type='ionicon' />),
      }
    }
  }, {
  headerMode: 'screen',
    contentComponent: (props) => (
      <View>
        	
        <View>
          <View style={{alignItems: 'center'}}>
          <OurHead />
          </View>
          <Divider style={{height: 2, backgroundColor: '#989898' }} />
        </View>
        <DrawerItems {...props} />
        <Button
        onPress={async () => {await AsyncStorage.clear(); this.props.navigation.navigate('Auth'); }}
        title="Logout"
      />
      </View>
    ),
  }));

export default class Home extends React.Component {
  static navigationOptions = {
    header:null,
  };
  
    render() {
      return <RootDrawer />;
    }
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

  class OurHead extends React.Component{
    render(){
      return <View><Text>Basic Authentication App</Text></View>;
    }
  }

  
