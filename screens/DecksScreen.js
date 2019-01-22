import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default class Decks extends React.Component {
  static navigationOptions = {
    title: "Decks"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.deck}>
          <Text style={{ fontSize: 30 }}>Deck1</Text>
          <Text>2 cards</Text>
        </View>
        <View style={styles.deck}>
          <Text style={{ fontSize: 30 }}>Deck2</Text>
          <Text>4 cards</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    alignItems: "stretch",
    padding: 30
  },
  deck: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    padding: 10
  }
});
