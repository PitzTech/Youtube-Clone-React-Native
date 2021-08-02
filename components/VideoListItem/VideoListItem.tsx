import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Entypo } from "@expo/vector-icons"

import styles from "./styles"

interface videoData {
	video: {
		id: string
		createdAt: string
		title: string
		thumbnail: string
		videoUrl: string
		duration: number
		user: {
			name: string
			image?: string
		}
		views: number
	}
}

export default function VideoListItem(props: videoData): JSX.Element {
	const { video } = props
	const minutes = Math.floor(video.duration / 60)
	const seconds = video.duration % 60

	let viewString = video.views.toString()
	if (video.views > 1e6) viewString = video.views / 1e6 + "m"
	else if (video.views > 1e3) viewString = video.views / 1e3 + "k"

	return (
		<View style={styles.videoCard}>
			{/* Thumbnail */}
			<View>
				<Image
					style={styles.thumbnail}
					source={{
						uri: video.thumbnail,
					}}
				/>
				<View style={styles.timeContainer}>
					<Text style={styles.time}>
						{minutes}:{seconds}
					</Text>
				</View>
			</View>

			{/* Title Row */}
			<View style={styles.titleRow}>
				{/* Avatar */}

				<View style={styles.avatarContainer}>
					<Image
						style={styles.avatarImage}
						source={{
							uri: video.user.image,
						}}
					/>
				</View>
				{/* Middle Container: Title, subtitle, etc. */}
				<View style={styles.middleContainer}>
					<Text style={styles.title}>{video.title}</Text>
					<Text style={styles.subtitle}>
						{video.user.name} • {viewString} visualizações • há{" "}
						{video.createdAt}
					</Text>
				</View>
				{/* Icon */}
				<Entypo name="dots-three-vertical" size={16} color="white" />
			</View>
		</View>
	)
}
