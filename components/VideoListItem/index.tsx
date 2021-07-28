import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Entypo } from "@expo/vector-icons"

export default function VideoListItem(): JSX.Element {
	return (
		<View style={styles.videoCard}>
			{/* Thumbnail */}
			<View>
				<Image
					style={styles.thumbnail}
					source={{
						uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg",
					}}
				/>
				<View style={styles.timeContainer}>
					<Text style={styles.time}>15:23</Text>
				</View>
			</View>

			{/* Title Row */}
			<View style={styles.titleRow}>
				{/* Avatar */}

				<View style={styles.avatarContainer}>
					<Image
						style={styles.avatarImage}
						source={{
							uri: "https://avatars.githubusercontent.com/u/53540002?v=4",
						}}
					/>
				</View>
				{/* Middle Container: Title, subtitle, etc. */}

				<View style={styles.middleContainer}>
					<Text style={styles.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Text>
					<Text style={styles.subtitle}>PitzTech 1.5m 2 months ago</Text>
				</View>
				{/* Icon */}
				<Entypo name="dots-three-vertical" size={16} color="white" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	thumbnail: {
		width: "100%",
		aspectRatio: 16 / 9,
	},
	timeContainer: {
		backgroundColor: "#00000099",
		height: 25,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		position: "absolute",
		right: 10,
		bottom: 10,
	},
	time: {
		color: "#fff",
		fontWeight: "bold",
	},
	avatarContainer: {
		justifyContent: "center",
	},
	avatarImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	titleRow: {
		flexDirection: "row",
		padding: 10,
	},
	middleContainer: {
		marginHorizontal: 10,
		flex: 1,
	},
	title: {
		color: "white",
		fontSize: 18,
		fontWeight: "500",
		marginBottom: 5,
	},
	subtitle: {
		color: "grey",
		fontSize: 14,
		fontWeight: "500",
	},
})
