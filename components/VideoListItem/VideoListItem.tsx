import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Entypo } from "@expo/vector-icons"

import styles from "./styles"

export default function VideoListItem({
	username,
	title,
	views,
	date,
	videoUri,
	avatarUri,
}): JSX.Element {
	return (
		<View style={styles.videoCard}>
			{/* Thumbnail */}
			<View>
				<Image
					style={styles.thumbnail}
					source={{
						uri: videoUri,
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
							uri: avatarUri,
						}}
					/>
				</View>
				{/* Middle Container: Title, subtitle, etc. */}

				<View style={styles.middleContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle}>
						{username} • {views} visualizações • há {date}
					</Text>
				</View>
				{/* Icon */}
				<Entypo name="dots-three-vertical" size={16} color="white" />
			</View>
		</View>
	)
}
