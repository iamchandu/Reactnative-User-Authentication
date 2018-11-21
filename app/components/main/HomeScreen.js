import React, {Component} from 'react';
import {View} from 'react-native';
import { Header, Text } from 'react-native-elements';

export default class HomeScreen extends React.Component {

    headerSamp = () => 
	<View>
		<Header
			leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer() }}
			centerComponent={{ text: 'Home', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            outerContainerStyles = {{height:50}}
		/>
	</View>

    render() {
        return (
            <View>
                {this.headerSamp()}
                <Text h3>Welcome to basic authentication app.</Text>
            </View>
        );
    }
}