import React from "react"
import { View, StyleSheet } from "react-native"

import VideoListItem from "../components/VideoListItem"

export default function HomeScreen(): JSX.Element {
	return (
		<View>
			<VideoListItem />
		</View>
	)
}

const styles = StyleSheet.create({})
