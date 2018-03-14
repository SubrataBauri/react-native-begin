import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

class Bananas extends React.Component {
	render() {
		let picture = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
		    <Image source={picture} style={{width:193, height: 110}} />
		);
	}
}

class Greetings extends Component {
	render() {
		return (
			<Text>Hello {this.props.name}!</Text>
		);
	}
}

export default class BananaGreetings extends Component {
	render() {
		return (
			<View style={mystyles.container}>
				<Bananas />
				<Greetings name='Subrata' />
				<Greetings name='Bauri' />
				<Greetings name='Batman vs SuperMan' />
			</View>
		)
	}
}

const mystyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


