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
    backgroundColor: "#74b9ff"
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
    padding: 4,
    paddingRight: 10,
    borderBottomWidth: 0.5
  },
  commentName: {
    fontSize: 12,
    fontWeight: "bold"
  },
  commentEmail: {
    fontSize: 12,
    marginBottom: 2
  },
  commentBody: {
    paddingLeft: 10,
    textAlign: "left",
    fontSize: 10
  }
});

export default styles;
