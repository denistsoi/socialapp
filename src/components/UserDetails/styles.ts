import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  nameContainer: {
    flex: 1
  },
  name: {
    fontSize: 16,
    justifyContent: "center"
  },
  username: {
    fontSize: 12
  },

  section: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    minHeight: 100
  },

  header: {
    padding: 10,
    backgroundColor: "#74b9ff"
  },
  scroll: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff"
  },
  container: {
    backgroundColor: "#efefef",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    padding: 20,
    paddingBottom: 40
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 4
  }
});

export default styles;
