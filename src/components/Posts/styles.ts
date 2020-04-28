import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postContainer: {
    padding: 2,
    paddingBottom: 3,
    borderBottomColor: "#ababab",
    borderBottomWidth: 1,
    marginBottom: 8
  },
  postContent: {
    marginBottom: 4
  },
  postTitle: {
    fontWeight: "bold",
    color: "#666"
  },
  postBody: {
    fontSize: 10,
    color: "#888"
  },
  commentButton: {
    alignSelf: "flex-end",
    backgroundColor: "#efefef",
    padding: 4
  },
  comment: {
    fontSize: 10
  }
});

export default styles;
