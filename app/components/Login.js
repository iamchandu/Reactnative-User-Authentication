import React, {Component} from 'react';
import { View,  AsyncStorage, Alert} from 'react-native';
import { Card, Button, FormLabel, FormInput, Header, Divider } from 'react-native-elements';

export default class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <View>
        <Header 
          centerComponent={{ text: 'Login', style: { color: '#fff' } }}
          outerContainerStyles = {{height:50}}
        />
        <Card title="Login">
           <FormLabel>Email</FormLabel>
           <FormInput onChangeText={(text)=>this.setState({email:text})}/>
           <FormLabel>Password</FormLabel>
           <FormInput secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})}/>
           <Button
            small
            icon={{name: 'user', type: 'font-awesome'}}
            title='Login'
            color='white'
            backgroundColor='#2195f3' 
            onPress={this._loginAsync} />
            <Divider style={{ backgroundColor: 'white', height:5 }} />
            <Button
            small
            icon={{name: 'user', type: 'font-awesome'}}
            title='Register'
            color='white'
            backgroundColor='#9c27b0' 
            onPress={this._signUp} />
        </Card>
      </View>
    );
  }

  _loginAsync = () => {
    if(this.state.email && this.state.password){
      fetch('http://192.168.0.103:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
      }).then((response) => response.json()).then(async (responseJson) => {
        if(responseJson.status){
          await AsyncStorage.setItem('userToken', responseJson.token);
          await AsyncStorage.setItem('user', responseJson.user.name);
          await this.props.navigation.navigate('App');
        }else{
          Alert.alert('Success!','Login Fail..');
        }
      })
      .catch((error) => {
        Alert.alert('warning!','Login Fail..');
        console.log(error);
      });
    }else{
      Alert.alert('warning!','Please fill User Name / Password..');
    }
  };

  _signUp = () => {
    this.props.navigation.navigate('Signup');
  };
}

