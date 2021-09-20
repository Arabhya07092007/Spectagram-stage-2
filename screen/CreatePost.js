import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class CreatePost extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <Text style={{textAlign:"center"}}>Create post screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont:{
    flex: 1,
    justifyContent: "center",
  },
});
