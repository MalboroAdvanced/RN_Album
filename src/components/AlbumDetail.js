import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
	return(
		<Card>
		<CardSection>
		<View>
			<Image style={styles.thumbnailStyle}
				source={{uri: props.album.thumbnail_image}} />
		</View>
		<View style={styles.headerContainerStyle}>
		<Text style={{ fontSize: 18}}>{props.album.title}</Text>
		<Text>{props.album.artist}</Text>
		</View>
		</CardSection>

		<CardSection>
		<Image style={styles.imageStyle}
			source={{uri: props.album.image}} />
		</CardSection>

		<CardSection>
		<Button onPress={() => Linking.openURL(props.album.url)} text="Buy Now!!" />
		</CardSection>
		</Card>
		);
};

const styles = {
	headerContainerStyle: { flexDirection: 'column', justifyContent: 'space-around'},
	thumbnailStyle: { height: 50, width: 50, marginRight: 10 },
	imageStyle: {height: 300, width: null, flex: 1 }
};
export default AlbumDetail;