import React from "react"
import { View, StyleSheet } from "react-native"

import VideoListItem from "../components/VideoListItem"

export default function HomeScreen(): JSX.Element {
	return (
		<View>
			<VideoListItem
				username={"PitzTech"}
				title={"trailer nova serie do canal - Minecraft Story Mode"}
				views={"142"}
				date={"5 anos"}
				videoUri={
					"https://i.ytimg.com/vi/I4Uk6nvEuDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3OagCp37hzS8s2NZHNEuDY6TpsQ"
				}
				avatarUri={"https://avatars.githubusercontent.com/u/53540002?v=4"}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
