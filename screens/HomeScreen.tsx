import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

export default function HomeScreen(): JSX.Element {
	return (
		<View>
			{/* Video Component */}
			<View>
				{/* Thumbnail */}
				<Image
					style={styles.thumbnail}
					source={{
						uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg",
					}}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	thumbnail: { width: 250, height: 250 },
})
