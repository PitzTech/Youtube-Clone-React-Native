import { AntDesign } from "@expo/vector-icons"
import React from "react"
import {
	View,
	Text,
	StyleSheet,
	Image,
	SafeAreaView,
	Platform,
	StatusBar,
} from "react-native"

import video from "../../assets/data/video.json"

import styles from "./styles"

export default function VideoScreen(): JSX.Element {
	let viewString = video.views.toString()
	if (video.views > 1e6) viewString = video.views / 1e6 + "m"
	else if (video.views > 1e3) viewString = video.views / 1e3 + "k"

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#141414",
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
			}}
		>
			{/* Video Player */}
			<Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />
			{/* Video Info */}
			<View style={styles.videoInfoContainer}>
				<Text style={styles.tags}>{video.tags}</Text>
				<Text style={styles.title}>{video.title}</Text>
				<Text style={styles.subtitle}>
					{video.user.name} • {viewString} visualizações • há{" "}
					{video.createdAt}
				</Text>
			</View>
			{/* Action List */}
			<View style={styles.actionListContainer}>
				<View style={styles.actionListItem}>
					<AntDesign name="like1" size={20} color="white" />
					<Text style={styles.actionText}>{video.likes}</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}
