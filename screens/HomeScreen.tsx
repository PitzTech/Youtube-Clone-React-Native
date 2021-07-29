import React from "react"
import { View, StyleSheet, FlatList } from "react-native"

import VideoListItem from "../components/VideoListItem"

import videos from "../assets/data/videos.json"

export default function HomeScreen(): JSX.Element {
	return (
		<View>
			<FlatList
				data={videos}
				keyExtractor={video => video.id}
				renderItem={({ item }) => <VideoListItem video={item} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
