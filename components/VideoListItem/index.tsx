import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Entypo } from "@expo/vector-icons"

import styles from "./styles"

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
