import React, {Component} from 'react';
import { View,ScrollView, FlatList} from 'react-native';
import { Header, List, ListItem, Avatar } from 'react-native-elements';

export default class Products extends React.Component {
    
      state = {
          data:[]
      }

    headerSamp = () => 
	<View>
		<Header
			leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer() }}
			centerComponent={{ text: 'Products', style: { color: '#fff' } }}
            rightComponent={{ icon: 'ios-information-circle' ,type:'ionicon', color: '#fff' }}
            outerContainerStyles = {{height:50}}
		/>
	</View>

    componentDidMount() {
        fetch('http://frensol.com/chandu/a.php')
        .then(response => response.json())
        .then(data => {this.setState({data });
        });
                    
    } 

    renderRow ({ item }) {
        return (
          <ListItem
            avatar={<Avatar
                      source={item.image && {uri: item.image}}
                      title={item.title}
                    />}
            title={item.title}
            subtitle={'INR '+item.mrp}
            rightIcon={{name:'shopping-cart',type:'entypo',color:'black'}}
          />
        )
      }
   

    render() {
        return (
            <View>
                <View>
                    {this.headerSamp()}
                </View>
                <ScrollView>
                <List>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.title}
                    />
                    </List>
                </ScrollView>
            </View>
        );
    }
}