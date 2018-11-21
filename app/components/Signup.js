import React, {Component} from 'react';
import { View} from 'react-native';
import { Card, Button, FormLabel, FormInput, Header, Divider } from 'react-native-elements'

export default class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    phone: '',
    name: ''
  };
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <View>
        <Header 
          centerComponent={{ text: 'Signin', style: { color: '#fff' } }}
          outerContainerStyles = {{height:50}}
        />
        <Card title="Signup">
            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={(text)=>this.setState({name:text})}/>
            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={(text)=>this.setState({email:text})}/>
            <FormLabel>Phone</FormLabel>
            <FormInput onChangeText={(text)=>this.setState({phone:text})}/>
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})}/>
            <Button
            small
            icon={{name: 'user', type: 'font-awesome'}}
            title='Register'
            color='white'
            backgroundColor='#2195f3' 
            onPress={this._signUp} />
            <Divider style={{ backgroundColor: 'white', height:5 }} />
            <Button
            small
            icon={{name: 'user', type: 'font-awesome'}}
            title='Login'
            color='white'
            backgroundColor='#9c27b0'  
            onPress={this._signInAsync} />
        </Card>
      </View>
    );
  }

  _signInAsync = async () => {
    this.props.navigation.navigate('Login');
  };

  _signUp = () => {
    this.props.navigation.navigate('App');
  };
}

