import { AntDesign } from "@expo/vector-icons"
import React from "react"
import {
	View,
	Text,
	Image,
	SafeAreaView,
	Platform,
	StatusBar,
	ScrollView,
	FlatList,
} from "react-native"

import video from "../../assets/data/video.json"
import videos from "../../assets/data/videos.json"

import VideoListItem from "../../components/VideoListItem"

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
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Video Player */}
				<Image
					style={styles.videoPlayer}
					source={{ uri: video.thumbnail }}
				/>

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
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={styles.actionListItem}>
							<AntDesign name="like1" size={25} color="lightgrey" />
							<Text style={styles.actionText}>{video.likes}</Text>
						</View>
						<View style={styles.actionListItem}>
							<AntDesign name="dislike2" size={25} color="lightgrey" />
							<Text style={styles.actionText}>{video.dislikes}</Text>
						</View>
						<View style={styles.actionListItem}>
							<AntDesign name="export" size={25} color="lightgrey" />
							<Text style={styles.actionText}>{video.dislikes}</Text>
						</View>
						<View style={styles.actionListItem}>
							<AntDesign name="download" size={25} color="lightgrey" />
							<Text style={styles.actionText}>{video.dislikes}</Text>
						</View>
					</ScrollView>
				</View>

				{/* User Info */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderColor: "#3d3d3d",
						borderTopWidth: 0.5,
						borderBottomWidth: 0.5,
						padding: 15,
					}}
				>
					<Image
						style={styles.avatar}
						source={{ uri: video.user.image }}
					/>

					<View style={{ marginHorizontal: 10, flex: 1 }}>
						<Text
							style={{
								fontSize: 18,
								color: "white",
								fontWeight: "bold",
							}}
						>
							{video.user.name}
						</Text>
						<Text style={{ fontSize: 15, color: "grey" }}>
							{video.user.subscribers} inscritos
						</Text>
					</View>

					<View
						style={{
							paddingHorizontal: 10,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								fontSize: 18,
								color: "red",
								fontWeight: "bold",
							}}
						>
							Inscrever
						</Text>
					</View>
				</View>

				{/* Comments */}
				<View style={{ padding: 10, marginVertical: 10 }}>
					<Text
						style={{
							color: "lightgrey",
							fontSize: 16,
						}}
					>
						Comentários{" "}
						<Text style={{ color: "grey", marginLeft: 10 }}>42</Text>
					</Text>

					{/* Comment Component */}
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginVertical: 15,
						}}
					>
						<Image
							style={{ width: 35, height: 35, borderRadius: 18 }}
							source={{ uri: video.user.image }}
						/>

						<Text
							style={{
								fontSize: 13,
								marginLeft: 10,
								color: "lightgrey",
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quis repudiandae
						</Text>
					</View>
				</View>

				{/* Recommended Videos */}

				<FlatList
					data={videos}
					renderItem={({ item }) => <VideoListItem video={item} />}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}
