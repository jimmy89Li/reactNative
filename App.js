import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>
        <Button
          title="Touch me!"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timeNow: new Date()
    }
  }

  static navigationOptions = {
    title: 'Details',
  }

  componentDidMount() {
    // console.log(this.state);
    let notT = this.state.timeNow;
    let nowTp = notT.getTime() + (10 * 60 * 1000);
    console.log(new Date(nowTp));
    if(this.state.reqTime && this.state.reqTime < nowTp) {
      console.log('existing');
    } else {
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Odense,dk&APPID=85270f72133b4968356064ad9171bc4f&units=metric')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          reqTime: new Date(),
          data: responseJson
        }, function() {
          console.log(this.state)
        })
      })
    }
  }

  render() {
    return (      
      <View style={styles.container}>
        <Text style={styles.text}>Details!</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'magenta',
      },
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 32
  }
});
