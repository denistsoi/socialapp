import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  safeView: {
    flex: 1
  },
  postContainer: {
    flex: 1,
    paddingBottom: 20
  },
  post: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white"
  },
  postTitle: {
    fontWeight: "bold",
    marginBottom: 4
  },
  commentContainer: {
    backgroundColor: "#efefef",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    padding: 20,
    paddingBottom: 40
  },
  commentList: {
    backgroundColor: "#fff"
  },
  comment: {
    padding: 2,
    borderBottomWidth: 0.5
  }
});

export default styles;
