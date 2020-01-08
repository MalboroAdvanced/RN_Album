import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return(
		<View style={viewStyle}>
		<Text style={textStyle}>
		{props.headerText}
		</Text>
		</View>
		);
}

const styles = {
	textStyle: { fontSize: 20 },
	viewStyle: { backgroundColor: '#F8F8F0', justifyContent: 'center', alignItems: 'center', height: 60, 
				 paddingTop: 15, shadowColor: '#000',  
				 shadowOpacity: 0.5, elevation: 8, position: 'relative' }
};

export default Header;