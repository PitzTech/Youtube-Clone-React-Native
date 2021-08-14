import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	videoPlayer: {
		width: "100%",
		aspectRatio: 16 / 9,
	},
	videoInfoContainer: {
		marginHorizontal: 10,
	},
	title: {
		color: "white",
		fontSize: 18,
		fontWeight: "500",
		marginVertical: 10,
	},
	tags: {
		color: "#0094e3",
		fontSize: 14,
		fontWeight: "500",
		marginTop: 10,
	},
	subtitle: {
		color: "grey",
		fontSize: 14,
		fontWeight: "500",
	},

	// action list
	actionListContainer: {
		marginVertical: 10,
	},
	actionListItem: {
		width: 70,
		height: 55,
		justifyContent: "space-around",
		alignItems: "center",
	},
	actionText: {
		fontSize: 12,
		color: "white",
	},

	// User Info
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
})

export default styles
