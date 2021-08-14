import React, { useRef } from "react"
import { View, Text } from "react-native"
import { Video } from "expo-av"

interface VideoPlayerProps {
	videoUri: string
	thumbnailUril: string
}

export default function VideoPlayer({
	videoUri,
	thumbnailUril,
}: VideoPlayerProps): JSX.Element {
	return (
		<View>
			<Video
				source={{ uri: videoUri }}
				//
				usePoster
				posterSource={{ uri: thumbnailUril }}
				posterStyle={{ resizeMode: "cover" }}
				//
				useNativeControls
				resizeMode="contain"
				style={{ width: "100%", aspectRatio: 16 / 9 }}
			/>
		</View>
	)
}
